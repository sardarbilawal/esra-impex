'use client';

import { motion } from 'framer-motion';
import { productCategories } from './const';

export default function Products() {
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Premium Products
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover our diverse range of high-quality agricultural and natural products, 
              carefully selected and processed to meet international standards
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Categories */}
      {productCategories.map((category, categoryIndex) => (
        <motion.section 
          key={categoryIndex} 
          className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div 
                  className="text-6xl mb-4 inline-block"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -10, 10, -10, 0] 
                  }}
                >
                  {category.emoji}
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {category.title}
                </motion.h2>
                <motion.div 
                  className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.p 
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {category.description}
                </motion.p>
              </motion.div>

              {/* Products Grid */}
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {category.products.map((product, productIndex) => (
                  <motion.div 
                    key={productIndex} 
                    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-lg cursor-pointer group"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + productIndex * 0.1 
                    }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#AF6641] transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 + productIndex * 0.1 }}
                    >
                      {product.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 text-sm leading-relaxed mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + productIndex * 0.1 }}
                    >
                      {product.description}
                    </motion.p>
                    <motion.div 
                      className="flex items-center text-[#AF6641] text-sm font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + productIndex * 0.1 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-[#305D50] rounded-full mr-2"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      Export Grade Quality
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Quality Assurance */}
      <motion.section 
        className="py-16 bg-[#AF6641]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Quality Assurance
              </motion.h2>
              <motion.p 
                className="text-xl text-[#e8f0ef] max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Every product undergoes rigorous quality control to ensure it meets international standards
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-4 gap-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { emoji: "🔍", title: "Inspection", desc: "Thorough quality inspection at every stage" },
                { emoji: "🧪", title: "Testing", desc: "Laboratory testing for purity and safety" },
                { emoji: "📦", title: "Packaging", desc: "Professional packaging for safe transport" },
                { emoji: "✅", title: "Certification", desc: "International quality certifications" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + index * 0.1 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ 
                      backgroundColor: "rgba(255,255,255,0.3)",
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.emoji}
                    </motion.span>
                  </motion.div>
                  <motion.h3 
                    className="text-white font-bold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[#e8f0ef] text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Interested in Our Products?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contact us for detailed product specifications, pricing, and minimum order quantities
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a 
                href="/contact" 
                className="bg-[#AF6641] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a1532b] transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                Request Quote
              </motion.a>
              <motion.a 
                href="/gallery" 
                className="border-2 border-[#AF6641] text-[#AF6641] px-8 py-3 rounded-lg font-semibold hover:bg-[#AF6641] hover:text-white transition-colors"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Gallery
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}