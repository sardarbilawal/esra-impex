import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_HOST,
      port: Number(process.env.HOSTINGER_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.HOSTINGER_USER, 
        pass: process.env.HOSTINGER_PASS,
      },
    });

    // Email that comes to YOU
    await transporter.sendMail({
      from: `"${name}" <${process.env.HOSTINGER_USER}>`,
      to: process.env.HOSTINGER_USER,
      replyTo: email,
      subject: `Contact Message from ${name}`,
      html: `
        <h2>You’ve received a new inquiry from your website Esra Impex.</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Optional: send confirmation to user
    await transporter.sendMail({
      from: `"Esra Impex" <${process.env.HOSTINGER_USER}>`,
      to: email,
      subject: 'Thank you for contacting Esra Impex!',
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to <strong>Esra Impex</strong>. We have received your message and will respond shortly.</p>
        <br/>
        <p>Best regards,<br/>Esra Impex Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
