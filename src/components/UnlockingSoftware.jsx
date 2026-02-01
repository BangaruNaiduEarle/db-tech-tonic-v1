import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { unlockingProducts } from '../data/sampleData';

export default function UnlockingSoftware() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="unlocking" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Unlocking Solutions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Professional network unlock tools and services for all major brands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {unlockingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-neutral-200 rounded-xl shadow hover:shadow-xl transition-all cursor-pointer overflow-hidden relative"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-36 object-contain"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  {product.description.slice(0, 80)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">
                    {product.price}
                  </span>
                  <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded">
                    Limited Offer
                  </span>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                🔓 Popular
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6"
        >
          <div className="flex items-start space-x-4">
            <div className="text-3xl flex-shrink-0">⚠️</div>
            <div>
              <h4 className="font-bold text-neutral-900 mb-2">
                Legal Compliance Notice
              </h4>
              <p className="text-sm text-neutral-700">
                Customers must ensure unlocking is legal for their device and carrier. Please
                confirm carrier agreements and local regulations before purchasing. <mark className='p-0.5'>DB TECH TONIC</mark>
                provides licensed tools and services for lawful use only. We require proof of
                ownership and do not condone or facilitate illegal activities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
               
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">🔓</div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">
                        {selectedProduct.title}
                      </h3>
                      <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                        {selectedProduct.license}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
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

                 <div className="flex items-center gap-4 mb-2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-auto h-24 object-contain"
                  />
                <p className="text-neutral-700 mb-6">{selectedProduct.description}</p>
                </div>


                <div className="bg-neutral-50 rounded-lg p-4 mb-6 space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-neutral-900">Supported Brands:</span>
                      <p className="text-neutral-700">{selectedProduct.support.join(', ')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-neutral-900">License Type:</span>
                      <p className="text-neutral-700">{selectedProduct.license}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-neutral-900">Notes:</span>
                      <p className="text-neutral-700">{selectedProduct.notes}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="flex-1 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors text-center"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Request License
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
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
