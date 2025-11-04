'use client';

import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (formData: ContactFormData) => void;
  isSubmitting?: boolean;
  className?: string;
  title?: string;
}

const ContactForm = ({
  onSubmit,
  isSubmitting = false,
  className = '',
  title
}: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [internalSubmitting, setInternalSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setInternalSubmitting(true);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('✅ Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      const { error } = await res.json();
      alert(`❌ Failed to send: ${error}`);
    }
  } catch (err) {
    alert('❌ Something went wrong. Please try again.');
  } finally {
    setInternalSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submittingState = isSubmitting || internalSubmitting;

  return (
    <div className={className}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-800 mb-8">{title}</h3>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
            placeholder={
              "Tell us about your requirements..."
            }
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submittingState}
          className="w-full bg-[#AF6641] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a1532b] transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submittingState ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;