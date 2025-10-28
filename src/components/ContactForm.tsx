'use client';

import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  country?: string;
  productInterest?: string;
  orderQuantity?: string;
  message: string;
}

export interface ContactFormProps {
  formType?: 'quick' | 'detailed';
  onSubmit?: (formData: ContactFormData) => void;
  isSubmitting?: boolean;
  className?: string;
  title?: string;
}

const ContactForm = ({ 
  formType = 'quick', 
  onSubmit,
  isSubmitting = false,
  className = '',
  title
}: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productInterest: '',
    orderQuantity: '',
    message: ''
  });

  const [internalSubmitting, setInternalSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default submission behavior
      setInternalSubmitting(true);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
      if (formType === 'detailed') {
        alert('Thank you for your inquiry! We will get back to you within 24 hours.');
      } else {
        alert('Thank you for your message! We will get back to you soon.');
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        productInterest: '',
        orderQuantity: '',
        message: ''
      });
      
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
        {/* Basic Fields - Always Present */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name {formType === 'detailed' && '*'}
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
              Email Address {formType === 'detailed' && '*'}
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

        {/* Detailed Form Additional Fields */}
        {formType === 'detailed' && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
                  placeholder="Your Country"
                />
              </div>
              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
                >
                  <option value="">Select Product Category</option>
                  <option value="fruits">Fresh Fruits</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="rice">Rice</option>
                  <option value="salt">Himalayan Salt</option>
                  <option value="mixed">Mixed Products</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="orderQuantity" className="block text-sm font-medium text-gray-700 mb-2">
                Expected Order Quantity
              </label>
              <select
                id="orderQuantity"
                name="orderQuantity"
                value={formData.orderQuantity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
              >
                <option value="">Select Quantity Range</option>
                <option value="small">Less than 1 ton</option>
                <option value="medium">1-10 tons</option>
                <option value="large">10-100 tons</option>
                <option value="bulk">More than 100 tons</option>
              </select>
            </div>
          </>
        )}

        {/* Quick Form Company Field */}
        {formType === 'quick' && (
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
        )}

        {/* Message Field - Always Present */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message {formType === 'detailed' && '*'}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={formType === 'detailed' ? 6 : 5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
            placeholder={
              formType === 'detailed'
                ? "Please provide details about your requirements, including specific products, quantities, delivery timeline, and any special requirements..."
                : "Tell us about your requirements..."
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