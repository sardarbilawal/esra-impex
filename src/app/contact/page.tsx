'use client';
import ContactForm from '../../components/ContactForm';

export default function Contact() {

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
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm
                formType="quick"
                title="Send Us a Message"
              />

              {/* Sidebar Info */}
              <div className="space-y-8">

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
                  
                  <p className="text-gray-600">Strategically located in Pakistan for efficient global exports</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d851.3333333333334!2d73.2272871!3d34.1510149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDA5JzAzLjciTiA3M8KwMTMnMzguMiJF!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}