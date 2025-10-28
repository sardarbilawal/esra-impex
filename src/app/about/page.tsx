export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Esra Impex Private Ltd
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted partner in premium agricultural and natural product exports from Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Founded with a vision to bridge the gap between Pakistan&apos;s rich agricultural heritage 
                  and global markets, Esra Impex Private Ltd has established itself as a reliable partner 
                  for international buyers seeking premium quality products.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  From our headquarters in Pakistan, we work directly with local farmers and producers 
                  to ensure that every product meets international quality standards while supporting 
                  sustainable farming practices.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our commitment to excellence, transparency, and customer satisfaction has enabled us 
                  to build lasting relationships with clients across continents.
                </p>
              </div>
              <div className="bg-[#f0f5f4] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-secondary-700 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To deliver the finest agricultural and natural products from Pakistan to global markets, 
                  ensuring quality, sustainability, and customer satisfaction in every shipment.
                </p>
                <h3 className="text-2xl font-bold text-secondary-700 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the most trusted export partner for premium Pakistani agricultural products, 
                  contributing to global food security and sustainable trade practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We maintain the highest quality standards in sourcing, processing, and packaging 
                  to ensure our products exceed international expectations.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Trust & Transparency</h3>
                <p className="text-gray-600">
                  Building long-term relationships through honest communication, transparent 
                  processes, and reliable service delivery.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Committed to environmentally responsible practices that support sustainable 
                  agriculture and benefit farming communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
              <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Our experienced team ensures every aspect of the export process is handled with precision
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#e8f0ef] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Quality Control</h3>
                <p className="text-gray-600 text-sm">Rigorous testing and inspection processes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#e8f0ef] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Logistics</h3>
                <p className="text-gray-600 text-sm">Efficient global shipping and delivery</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#e8f0ef] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">Complete export documentation and compliance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#e8f0ef] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Customer Service</h3>
                <p className="text-gray-600 text-sm">Dedicated support throughout the process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#AF6641]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join our growing list of satisfied international clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-[#AF6641] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </a>
              <a 
                href="/products" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#AF6641] transition-colors"
              >
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}