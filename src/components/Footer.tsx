import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#c77f5c] mb-4">Esra Impex Private Ltd</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in agricultural and mineral exports. We deliver premium-grade 
              agricultural and natural products from Pakistan to global markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#c77f5c] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-[#c77f5c] transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-[#c77f5c] transition-colors">Our Products</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-[#c77f5c] transition-colors">Gallery</Link></li>
              <li><Link href="/certifications" className="text-gray-300 hover:text-[#c77f5c] transition-colors">Certifications</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#c77f5c] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#c77f5c] mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-[#c77f5c] mr-2">📞</span>
                <span className="text-gray-300">+92 348 4300929</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#c77f5c] mr-2">📧</span>
                <span className="text-gray-300">info@esraimpex.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#c77f5c] mr-2">🌐</span>
                <span className="text-gray-300">www.esraimpex.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Esra Impex Private Ltd — All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Your trusted partner in agricultural and mineral exports.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;