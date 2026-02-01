import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import categoryBrandData from '../data/categoryBrandData';

export default function AllCategoryBrandsPage() {
  const { slug } = useParams();
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState(''); // <-- Added for search

  const categoryEntry = categoryBrandData[slug];

  useEffect(() => {
    if (categoryEntry?.priceRanges?.length > 0) {
      const min = categoryEntry.priceRanges[0].min;
      const max = categoryEntry.priceRanges[categoryEntry.priceRanges.length - 1].max;
      setPriceRange([min, max]);
    }
  }, [slug]);

  if (!categoryEntry) {
    return <div className="p-12 text-center text-red-600">Invalid category slug: "{slug}"</div>;
  }

  const categoryData = categoryEntry.category;
  const brandFilters = categoryEntry.brandFilters.map((b) => b.name);
  const allProducts = categoryEntry.products;
  const brands = ['All', ...brandFilters.filter((b) => b !== 'All')];

  const filteredProducts = allProducts.filter((p) => {
    const brandMatch = selectedBrand === 'All' || p.brand === selectedBrand;
    const priceMatch = p.priceValue >= priceRange[0] && p.priceValue <= priceRange[1];
    const searchMatch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.tags && p.tags.join(',').toLowerCase().includes(searchTerm.toLowerCase())); // <-- Tag search support
    return brandMatch && priceMatch && searchMatch;
  });

  return (
    <section className="py-24 bg-white min-h-screen" id="all-brands">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {categoryData.title}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {categoryData.description}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-64 bg-neutral-50 border border-neutral-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">Filters</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-sm"
              >
                {brands.map((brand, idx) => (
                  <option key={idx} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-neutral-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by name, brand, or tag"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-neutral-700 mb-2">Price Range</label>
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  min={0}
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                  className="w-1/2 border border-neutral-300 rounded px-3 py-1 text-sm"
                />
                <span>-</span>
                <input
                  type="number"
                  min={priceRange[0]}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                  className="w-1/2 border border-neutral-300 rounded px-3 py-1 text-sm"
                />
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <Link to={`/product/${slug}/${product.slug}`}>
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow hover:shadow-md transition cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-neutral-900 line-clamp-2 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-xs text-neutral-500 mb-2">{product.brand}</p>
                  <p className="font-bold text-primary text-base">{product.price}</p>
                </div>
              </motion.div>
              </Link>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-neutral-600">No products found for this filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
