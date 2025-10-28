'use client';

import Link from 'next/link';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch With Us
          </h2>
          <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to place an order or request a quotation? Our team is here to assist you with all your export inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#e8f0ef] p-3 rounded-lg mr-4">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+92 348 4300929</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#e8f0ef] p-3 rounded-lg mr-4">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">info@esraimpex.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#e8f0ef] p-3 rounded-lg mr-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Website</h4>
                  <p className="text-gray-600">www.esraimpex.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#e8f0ef] p-3 rounded-lg mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-600">Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-block bg-[#AF6641] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a1532b] transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Us a Message
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm 
            formType="quick"
            title="Quick Inquiry"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;