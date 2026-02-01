import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { products } from '../data/sampleData';

export default function ProductCatalog({ products }) {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const brands = ['All', ...new Set(products.map((p) => p.brand))];

  const filteredProducts =
    selectedBrand === 'All'
      ? products
      : products.filter((p) => p.brand === selectedBrand);

  return (
    <section id="spare-parts" className="py-20 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
            Explore Spare Parts by Brand
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Genuine OEM spare parts curated for iPhone, Samsung, Xiaomi & more. Available with fast shipping and tech support.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-5 py-2 rounded-full font-medium border text-sm transition-all ${selectedBrand === brand
                  ? 'bg-primary text-black shadow-md'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                }`}
            >
              {brand}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all cursor-pointer border border-neutral-100"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-square bg-neutral-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wide">
                  {product.brand}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2 text-sm line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between text-xs text-neutral-600 mb-3">
                  {/* <span className="font-medium">
  {selectedProduct.models?.join(', ') || 'Universal'}
</span> */}

                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
                    In Stock: {product.stock}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-neutral-900">
                    Rs: {product.price}  /-
                  </span>
                  <button className="px-4 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-dark transition">
                    Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">No products found for this brand.</p>
          </div>
        )}
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full z-50 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto">
                <div className="aspect-square bg-neutral-100">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 relative">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
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

                  <div className="text-xs font-medium text-primary mb-2">
                    {selectedProduct.brand}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {selectedProduct.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b border-neutral-200 text-sm">
                      <span className="text-neutral-600">Compatible Models:</span>
                      <span className="font-medium">
                        {selectedProduct.models.join(', ')}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200 text-sm">
                      <span className="text-neutral-600">Price Range:</span>
                      <span className="font-bold text-primary text-lg">
                        {selectedProduct.price}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-neutral-200 text-sm">
                      <span className="text-neutral-600">Availability:</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProduct.stock} in stock
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-700 text-sm mb-6">
                    {selectedProduct.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="#contact"
                      className="flex-1 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors text-center"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Enquire Now
                    </a>
                    <a
                      href="tel:+911234567890"
                      className="px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-lg transition-colors"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}