'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productInterest: '',
    orderQuantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    
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
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      details: '+92 348 4300929',
      description: 'Call us during business hours for immediate assistance'
    },
    {
      icon: '📧',
      title: 'Email',
      details: 'info@esraimpex.com',
      description: 'Send us your inquiries and we\'ll respond within 24 hours'
    },
    {
      icon: '🌐',
      title: 'Website',
      details: 'www.esraimpex.com',
      description: 'Visit our website for more information and updates'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'Pakistan',
      description: 'Strategically located for efficient global exports'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to start your export business with us? We&apos;re here to help with all your inquiries, 
              quotations, and order requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Multiple ways to reach us for your convenience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-[#AF6641] font-semibold mb-2">{method.details}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
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
                          Email Address *
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

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#305D50] focus:border-transparent"
                        placeholder="Please provide details about your requirements, including specific products, quantities, delivery timeline, and any special requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#AF6641] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a1532b] transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium text-gray-800">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-[#f0f5f4] rounded-lg">
                    <p className="text-sm text-[#a1532b]">
                      📧 Email inquiries are answered 24/7 with responses within 24 hours
                    </p>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-[#AF6641] text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="mr-3">⚡</span>
                      <span>Email response within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3">📋</span>
                      <span>Quote provided within 48 hours</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3">🤝</span>
                      <span>Dedicated account manager</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3">📞</span>
                      <span>Phone support during business hours</span>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Minimum Order Quantity?</h4>
                      <p className="text-sm text-gray-600">Varies by product. Contact us for specific MOQ details.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Shipping Time?</h4>
                      <p className="text-sm text-gray-600">Typically 15-30 days depending on destination and product.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Payment Terms?</h4>
                      <p className="text-sm text-gray-600">L/C, T/T, and other secure payment methods accepted.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
              <p className="text-gray-600">Strategically located in Pakistan for efficient global exports</p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-gray-600">Interactive map showing our location in Pakistan</p>
                <p className="text-sm text-gray-500 mt-2">Map integration can be added with Google Maps API</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}