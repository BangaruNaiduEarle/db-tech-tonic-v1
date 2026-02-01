import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import productDetailsData from '../data/productDetailsData'; // Import all product data

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com', icon: <Instagram size={20} /> },
  { name: 'Facebook', url: 'https://facebook.com', icon: <Facebook size={20} /> },
];

const navItems = [
  { label: 'Home', href: '/' },
  // { label: 'Shop', href: '/categories/all' },
  { label: 'Spare Parts', href: '/categoryBrand/spare-parts' },
  { label: 'Unlock Tools', href: '/categoryBrand/unlocking-tools' },
  { label: 'Credits', href: '/categoryBrand/server-credits' },
  // { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const allProducts = Object.values(productDetailsData).flat();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      const term = searchTerm.toLowerCase();
      const matches = allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.brand.toLowerCase().includes(term) ||
          (p.tags && p.tags.some(tag => tag.toLowerCase().includes(term)))
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSelectSuggestion = (product) => {
    setSearchTerm('');
    setSuggestions([]);
    setIsMobileMenuOpen(false);
    navigate(`/product/${product.categorySlug}/${product.slug}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Title */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 rounded-full object-cover border border-primary/50 shadow"
              />
              <div>
                <h1 className="text-lg md:text-xl font-bold text-neutral-900 tracking-tight leading-tight">
                  DB TECH TONIC
                </h1>
                <p className="text-xs text-neutral-500 hidden md:block">
                  Mobile Tools & Spare Parts
                </p>
              </div>
            </motion.div>
          </Link>
          {/* Search Bar */} {/* ✅ New search bar */}
          <div className="hidden lg:flex flex-1 justify-center mx-6 relative">
            <div className="w-full max-w-md relative">
              <div className="flex items-center bg-white border border-neutral-300 rounded-full px-4 py-2 shadow-sm">
                <Search className="text-neutral-400 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Search products or brands..."
                  className="w-full focus:outline-none text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {suggestions.length > 0 && (
                <ul className="absolute z-50 bg-white border border-neutral-200 mt-1 rounded-md shadow-md w-full max-h-64 overflow-y-auto">
                  {suggestions.map((item) => (
                    <li
                      key={item.id}
                      className="px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100 cursor-pointer"
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      {item.name} <span className="text-neutral-400">({item.brand})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div> */}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-neutral-700 hover:text-primary transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200 shadow-sm"
          >

              <div className="flex flex-col flex-1 justify-center mx-6 relative">
            <div className="w-full max-w-md relative">
              <div className="flex lg:hidden items-center bg-white border border-neutral-300 rounded-full px-4 py-2 shadow-sm">
                <Search className="text-neutral-400 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="Search products or brands..."
                  className="w-full focus:outline-none text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {suggestions.length > 0 && (
                <ul className="absolute z-50 bg-white border border-neutral-200 mt-1 rounded-md shadow-md w-full max-h-64 overflow-y-auto">
                  {suggestions.map((item) => (
                    <li
                      key={item.id}
                      className="px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100 cursor-pointer"
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      {item.name} <span className="text-neutral-400">({item.brand})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-neutral-700 hover:text-primary font-medium transition"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex space-x-4 pt-4 border-t border-neutral-200">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-primary transition"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
