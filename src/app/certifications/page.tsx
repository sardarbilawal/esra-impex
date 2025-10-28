export default function Certifications() {
  const certifications = [
    {
      title: "ISO 22000:2018",
      type: "Food Safety Management",
      description: "International standard for food safety management systems ensuring safe food production and distribution.",
      features: ["HACCP Principles", "Risk Assessment", "Food Safety Culture", "Continuous Improvement"]
    },
    {
      title: "HACCP Certification",
      type: "Hazard Analysis Critical Control Points",
      description: "Systematic preventive approach to food safety and biological, chemical, and physical hazards.",
      features: ["Hazard Analysis", "Critical Control Points", "Monitoring Procedures", "Corrective Actions"]
    },
    {
      title: "Global GAP",
      type: "Good Agricultural Practices",
      description: "International standard for safe and sustainable agricultural production worldwide.",
      features: ["Sustainable Agriculture", "Worker Safety", "Environmental Protection", "Traceability"]
    },
    {
      title: "Organic Certification",
      type: "Organic Production Standards",
      description: "Certification for organic farming methods without synthetic pesticides or fertilizers.",
      features: ["Natural Production", "No Synthetic Chemicals", "Soil Health", "Biodiversity Protection"]
    },
    {
      title: "Halal Certification",
      type: "Islamic Dietary Laws",
      description: "Ensures products comply with Islamic dietary laws and are suitable for Muslim consumers.",
      features: ["Sharia Compliance", "Halal Processing", "Clean Supply Chain", "Religious Approval"]
    },
    {
      title: "Export Quality Standards",
      type: "International Trade Compliance",
      description: "Compliance with international export quality standards and regulations for global trade.",
      features: ["Quality Assurance", "International Standards", "Documentation", "Compliance Monitoring"]
    }
  ];

  const qualityProcess = [
    {
      step: "1",
      title: "Source Verification",
      description: "All suppliers and farms are thoroughly vetted and certified before partnership."
    },
    {
      step: "2", 
      title: "Regular Audits",
      description: "Periodic audits ensure continuous compliance with international standards."
    },
    {
      step: "3",
      title: "Testing & Analysis",
      description: "Comprehensive laboratory testing for quality, safety, and purity parameters."
    },
    {
      step: "4",
      title: "Documentation",
      description: "Complete documentation and traceability from farm to final shipment."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#f0f5f4] to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Certifications & Quality Standards
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our commitment to quality is backed by internationally recognized certifications 
              and rigorous quality control processes
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Certifications
              </h2>
              <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Internationally recognized certifications that guarantee our commitment to quality and safety
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#e8f0ef] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
                      <p className="text-[#AF6641] text-sm font-medium">{cert.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cert.description}</p>
                  <div className="space-y-2">
                    {cert.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-[#305D50] rounded-full mr-2"></span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Quality Assurance Process
              </h2>
              <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Our systematic approach to maintaining the highest quality standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#AF6641] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">International Standards Compliance</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We maintain strict compliance with international food safety, quality, and export standards 
                  to ensure our products meet the requirements of global markets.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#e8f0ef] p-2 rounded-lg mr-4 mt-1">
                      <span className="text-lg">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Continuous Monitoring</h4>
                      <p className="text-gray-600 text-sm">Regular assessment and monitoring of all processes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#e8f0ef] p-2 rounded-lg mr-4 mt-1">
                      <span className="text-lg">🔬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Laboratory Testing</h4>
                      <p className="text-gray-600 text-sm">Comprehensive testing for safety and quality parameters</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#e8f0ef] p-2 rounded-lg mr-4 mt-1">
                      <span className="text-lg">📋</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Documentation</h4>
                      <p className="text-gray-600 text-sm">Complete traceability and documentation systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#e8f0ef] p-2 rounded-lg mr-4 mt-1">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Continuous Improvement</h4>
                      <p className="text-gray-600 text-sm">Regular updates and improvements to maintain standards</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#f0f5f4] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#a1532b] mb-6">Compliance Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-[#AF6641] mr-3">🌍</span>
                    <span className="text-gray-700">Global Market Access</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#AF6641] mr-3">🛡️</span>
                    <span className="text-gray-700">Enhanced Product Safety</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#AF6641] mr-3">⭐</span>
                    <span className="text-gray-700">Premium Quality Assurance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#AF6641] mr-3">🤝</span>
                    <span className="text-gray-700">Customer Trust & Confidence</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#AF6641] mr-3">📈</span>
                    <span className="text-gray-700">Competitive Advantage</span>
                  </div>
                </div>
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
              Quality You Can Trust
            </h2>
            <p className="text-xl text-[#e8f0ef] mb-8">
              Our certifications are your guarantee of receiving premium quality products that meet international standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-[#AF6641] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Certification Copies
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