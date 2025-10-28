'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const products = [
    {
      emoji: '🍊',
      name: 'Citrus Fruits',
      description: 'Fresh oranges, lemons & grapefruits',
      image: '🍊'
    },
    {
      emoji: '🥔',
      name: 'Premium Potatoes',
      description: 'High-quality potatoes for export',
      image: '🥔'
    },
    {
      emoji: '🍚',
      name: 'Basmati Rice',
      description: 'Aromatic premium basmati rice',
      image: '🍚'
    },
    {
      emoji: '🧂',
      name: 'Pink Salt',
      description: 'Himalayan pink salt crystals',
      image: '🧂'
    },
    {
      emoji: '🌶️',
      name: 'Spices',
      description: 'Authentic Pakistani spices',
      image: '🌶️'
    },
    {
      emoji: '🥭',
      name: 'Mangoes',
      description: 'Sweet Pakistani mangoes',
      image: '🥭'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#AF6641]">🌍</span> Sourced for Quality. 
              <br />
              <span className="text-[#305D50]">Delivered Globally.</span>
            </motion.h1>
            
            {/* Sub-text */}
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Esra Impex Private Ltd, we export premium-grade agricultural and natural products 
              from Pakistan — delivering freshness, purity, and excellence to global markets.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/products" 
                className="bg-[#AF6641] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#a1532b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Explore Our Products
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-[#305D50] text-[#305D50] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#305D50] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Product Showcase */}
          <motion.div 
            className="relative h-96 lg:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Product Cards */}
            <div className="relative w-80 h-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct}
                  className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.div 
                    className="text-8xl mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {products[currentProduct].emoji}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#AF6641] mb-2 text-center">
                    {products[currentProduct].name}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {products[currentProduct].description}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress Indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {products.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                      index === currentProduct ? 'bg-[#AF6641] w-8' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentProduct(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Background Elements */}
            <motion.div
              className="absolute top-10 -left-10 text-6xl opacity-20"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              �
            </motion.div>
            <motion.div
              className="absolute bottom-10 -right-10 text-5xl opacity-20"
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              🍃
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;