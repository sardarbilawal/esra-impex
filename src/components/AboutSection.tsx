'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Simple Animated Counter Component
const AnimatedCounter = ({ end, suffix, label, delay }: { 
  end: number; 
  suffix: string; 
  label: string; 
  delay: number; 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      // Start animation after delay
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay * 1000);
    }
  }, [isInView, end, delay]);

  return (
    <motion.div 
      ref={ref}
      className="text-center p-6 bg-[#f0f5f4] rounded-lg hover:shadow-lg cursor-pointer group"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="text-3xl font-bold text-[#305D50] mb-2 group-hover:text-[#AF6641] transition-colors duration-300"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: delay + 0.2,
          type: "spring",
          stiffness: 200
        }}
      >
        {count}{suffix}
      </motion.div>
      <motion.div 
        className="text-gray-700 font-medium group-hover:text-gray-800 transition-colors duration-300"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.4 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const AboutSection = () => {
  const stats = [
    { number: 100, suffix: '%', label: 'Natural Products' },
    { number: 50, suffix: '+', label: 'Global Clients' },
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 99, suffix: '%', label: 'On-Time Delivery' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Who We Are
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Esra Impex Private Ltd is a leading export company based in Pakistan, committed to 
                providing high-quality fruits, vegetables, rice, and Himalayan salt to international clients.
              </motion.p>
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                With a focus on sustainability, timely delivery, and strict quality control, we ensure 
                that every product reflects our dedication to global standards and customer satisfaction.
              </motion.p>
            </motion.div>
            
            {/* Stats with Animated Numbers */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={index}
                  end={stat.number}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={0.6 + index * 0.1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;