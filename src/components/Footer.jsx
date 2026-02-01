import { Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com', icon: <Instagram size={20} /> },
  { name: 'Facebook', url: 'https://facebook.com', icon: <Facebook size={20} /> },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DB</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">DB TECH TONIC</h3>
              </div>
            </div>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              Your trusted partner in mobile unlocking, flashing tools & genuine spare parts. Fast shipping. Verified service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary transition"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link to="/categoryBrand/spare-parts" className="hover:text-primary transition">Spare Parts</Link></li>
              <li><Link to="/categoryBrand/unlocking-tools" className="hover:text-primary transition">Unlocking Tools</Link></li>
              <li><Link to="/categoryBrand/server-credits" className="hover:text-primary transition">Credits</Link></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Top Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Screen Replacement</li>
              <li>Battery Replacement</li>
              <li>Unlocking Tools</li>
              <li>Dongles & Credits</li>
              <li>Flashing Software</li>
              <li>Wholesale Orders</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start space-x-2">
                <span>📍</span>
                <span>123 Tech Street, Electronics Market, Mumbai 400001</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📞</span>
                <a href="tel:+911234567890" className="hover:text-primary transition">+91 123 456 7890</a>
              </li>
              <li className="flex items-start space-x-2">
                <span>✉️</span>
                <a href="mailto:info@dbtechtonic.com" className="hover:text-primary transition">info@dbtechtonic.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-400 gap-4">
          <p>© {currentYear} DB TECH TONIC. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
