import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-10" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              DB TECH TONIC — Premium GSM Tools & Parts
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-200 mb-10 max-w-3xl mx-auto"
          >
            Trusted supplier for mobile technicians — tools, cables, and authentic spare parts for iPhone, Samsung, Xiaomi & more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#shop"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Shop Now
            </a>
            <a
              href="#spare-parts"
              className="px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              View Spare Parts
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-white"
          >
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-1">Fast Shipping</h3>
              <p className="text-sm text-neutral-300">Same-day dispatch on most orders</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl mb-2">✓</div>
              <h3 className="font-semibold mb-1">Warranty Support</h3>
              <p className="text-sm text-neutral-300">Covered against manufacturing defects</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="font-semibold mb-1">Genuine Parts</h3>
              <p className="text-sm text-neutral-300">High-quality OEM & certified parts</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#categories" aria-label="Scroll to categories">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
