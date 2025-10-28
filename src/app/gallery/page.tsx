'use client';

import { useState } from 'react';
import Image from 'next/image';
import { categories, galleryItems } from './const';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#f0f5f4] to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Product Gallery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our premium products and see the quality that makes us a trusted export partner
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === category.id
                      ? 'bg-[#AF6641] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  {/* Image */}
                  <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                    {/* Placeholder for image */}
                    <div className="w-full h-64 bg-linear-to-br from-[#e8f0ef] to-primary-200 flex items-center justify-center">
                      <div className="text-center">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"

                        />
                        <div className="text-secondary-700 font-medium">{item.title}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No items found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Process
              </h2>
              <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                From farm to shipment, see how we maintain quality at every step
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#e8f0ef] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sourcing</h3>
                <p className="text-gray-600 text-sm">Direct sourcing from trusted farmers and producers</p>
              </div>

              <div className="text-center">
                <div className="bg-[#e8f0ef] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Check</h3>
                <p className="text-gray-600 text-sm">Rigorous quality inspection and testing procedures</p>
              </div>

              <div className="text-center">
                <div className="bg-[#e8f0ef] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Packaging</h3>
                <p className="text-gray-600 text-sm">Professional packaging to maintain freshness</p>
              </div>

              <div className="text-center">
                <div className="bg-[#e8f0ef] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Shipping</h3>
                <p className="text-gray-600 text-sm">Safe and timely delivery to global destinations</p>
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
              Want to See More?
            </h2>
            <p className="text-xl text-[#e8f0ef] mb-8">
              Contact us for detailed product catalogs and custom photo documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-[#AF6641] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Catalog
              </a>
              <a
                href="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#AF6641] transition-colors"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}