const WhyChooseUsSection = () => {
  const features = [
    {
      emoji: '🌱',
      title: '100% Natural & Fresh Products',
      description: 'All our products are sourced directly from trusted farms and suppliers, ensuring maximum freshness and natural quality.'
    },
    {
      emoji: '📦',
      title: 'Safe & Secure Export Packaging',
      description: 'Professional packaging that maintains product integrity during international shipping and meets global standards.'
    },
    {
      emoji: '🌍',
      title: 'Global Export Network',
      description: 'Established relationships worldwide with reliable logistics partners ensuring smooth delivery to any destination.'
    },
    {
      emoji: '⏱',
      title: 'Timely Deliveries & Competitive Pricing',
      description: 'Consistent on-time delivery performance with competitive market pricing without compromising on quality.'
    },
    {
      emoji: '🤝',
      title: 'Strong Business Ethics',
      description: 'Built on trust, transparency, and long-term partnerships with our clients and suppliers worldwide.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted Worldwide for Quality and Reliability
          </h2>
          <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for international buyers seeking premium agricultural and natural products.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#f0f5f4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e8f0ef] transition-colors duration-300">
                <span className="text-3xl">{feature.emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#AF6641] mb-2">500+</div>
              <div className="text-gray-700">Successful Shipments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#AF6641] mb-2">25+</div>
              <div className="text-gray-700">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#AF6641] mb-2">98%</div>
              <div className="text-gray-700">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#AF6641] mb-2">24/7</div>
              <div className="text-gray-700">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;