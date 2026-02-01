import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productDetailsData from '../data/productDetailsData';
import { Star } from 'lucide-react';

export default function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const categoryProducts = productDetailsData[categorySlug] || [];
    const foundProduct = categoryProducts.find(p => p.slug === productSlug);
    setProduct(foundProduct);
  }, [categorySlug, productSlug]);

  if (!product) {
    return (
      <div className="p-12 text-center text-red-600 font-semibold text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <section className="pt-28 pb-16 px-4 max-w-7xl mx-auto">
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Product Image */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg object-cover"
            />
            <p className="mt-2 text-sm text-neutral-500">In stock: {product.stock}</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">{product.name}</h1>
          <p className="text-sm text-neutral-600">Brand: <span className="font-medium">{product.brand}</span></p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm text-yellow-600">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-yellow-500 stroke-yellow-500' : 'stroke-neutral-300'}`}
                />
              ))}
            </div>
            <span className="text-neutral-500">({product.reviewCount} reviews)</span>
          </div>

          <p className="text-2xl font-semibold text-primary">{product.price}</p>
          <p className="text-sm text-neutral-700 leading-relaxed">{product.description}</p>

          <div>
            <h4 className="font-semibold mb-1 text-sm">Features:</h4>
            <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {product.specs && (
            <div>
              <h4 className="font-semibold mb-1 text-sm">Specifications:</h4>
              <ul className="text-sm text-neutral-700 space-y-1">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key}>
                    <span className="capitalize font-medium">{key}:</span> {Array.isArray(value) ? value.join(', ') : value}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-1">
            {product.tags?.map(tag => (
              <span
                key={tag}
                className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-sm text-neutral-600">
            <p><strong>Warranty:</strong> {product.warranty}</p>
            <p><strong>Shipping:</strong> {product.shipping || product.deliveryTime}</p>
          </div>

          <a
            href={`https://wa.me/911234567890?text=Hi, I'm interested in *${product.name}* (${product.brand})`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-2 bg-primary text-black font-medium rounded-lg shadow hover:bg-primary-dark transition"
          >
            Contact on WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12 text-sm text-center">
        <Link
          to={`/categoryBrand/${product.categorySlug}`}
          className="text-primary font-medium hover:underline"
        >
          ← Back to {product.categoryName}
        </Link>
      </div>
    </section>
  );
}
