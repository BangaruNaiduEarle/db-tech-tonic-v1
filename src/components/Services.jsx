import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceDetails } from '../data/sampleData';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { key: 'repair', ...serviceDetails.repair },
    { key: 'diagnostic', ...serviceDetails.diagnostic },
    { key: 'unlocking', ...serviceDetails.unlocking },
    { key: 'wholesale', ...serviceDetails.wholesale },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive mobile solutions for individuals and businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-neutral-50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                {service.items.slice(0, 2).join(' • ')}
              </p>
              <button className="text-primary font-medium hover:text-primary-dark transition-colors">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{selectedService.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-neutral-400 hover:text-neutral-600 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3">
                  {selectedService.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <p className="text-neutral-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href="#contact"
                    className="flex-1 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors text-center"
                    onClick={() => setSelectedService(null)}
                  >
                    Book Now
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
