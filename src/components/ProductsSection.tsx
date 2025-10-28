'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const products = [
    {
      emoji: '🍊',
      title: 'Fresh Fruits',
      description: 'Oranges, Apples, Bananas, Mangoes, and more.',
      features: ['Premium Quality', 'Fresh & Natural', 'Export Grade']
    },
    {
      emoji: '🥔',
      title: 'Vegetables',
      description: 'Potatoes, Onions, and seasonal produce.',
      features: ['Farm Fresh', 'Quality Assured', 'Global Standards']
    },
    {
      emoji: '🍚',
      title: 'Rice',
      description: 'Premium Basmati and Non-Basmati varieties with perfect aroma and texture.',
      features: ['Aromatic Basmati', 'Long Grain', 'Export Quality']
    },
    {
      emoji: '🧂',
      title: 'Pink Himalayan Salt',
      description: '100% natural rock salt — available in edible, industrial, and decorative forms.',
      features: ['100% Natural', 'Multi-Purpose', 'Premium Grade']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exporting Nature&apos;s Best
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We specialize in delivering a diverse range of agricultural and natural goods 
            that meet international quality certifications.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative p-6 text-center">
                <motion.div 
                  className="text-5xl mb-4 inline-block"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {product.emoji}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#AF6641] transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {product.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-4 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {product.description}
                </motion.p>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {product.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-center justify-center text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.6 + featureIndex * 0.1,
                        duration: 0.4
                      }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-[#305D50] rounded-full mr-2"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/products" 
              className="inline-block bg-[#AF6641] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a1532b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;