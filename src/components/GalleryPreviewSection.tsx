import Link from 'next/link';
import Image from 'next/image';


const GalleryPreviewSection = () => {
  // Placeholder images - in a real application, these would be actual product images
  const galleryImages = [
    {
      src: '/images/gallery/fruits/mangoes.jpeg',
      alt: 'Fresh Pakistani Mangoes Export',
      title: 'Premium Mangoes',
      category: 'fruits'
    },
    {
      src: '/images/gallery/rice/sesame-seeds.jpeg',
      alt: 'Sesame Seeds Packaging',
      title: 'Sesame Seeds',
      category: 'rice'
    },
    {
      src: '/images/gallery/salt/pink-salt.jpeg',
      alt: 'Pink Himalayan Salt',
      title: 'Himalayan Salt',
      category: 'salt'
    },
    {
      src: '/images/gallery/vegetables/potatoes.jpeg',
      alt: 'Fresh Potatoes Export',
      title: 'Fresh Potatoes',
      category: 'vegetables'
    },
    {
      src: '/images/gallery/fruits/banana.jpeg',
      alt: 'Banana Export Shipment',
      title: 'Fruits',
      category: 'fruits'
    },
    {
      src: '/images/gallery/vegetables/lemon.jpeg',
      alt: 'Lemon Export Shipment',
      title: 'Vegetables',
      category: 'vegetables'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Gallery Preview
          </h2>
          <div className="w-24 h-1 bg-[#AF6641] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our premium products and professional packaging processes that ensure quality delivery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                {/* Placeholder for image */}
                <div className="w-full h-64 bg-linear-to-br from-[#e8f0ef] to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"

                    />
                    <div className="text-secondary-700 font-medium">{image.title}</div>
                  </div>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-[#AF6641] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#a1532b] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;