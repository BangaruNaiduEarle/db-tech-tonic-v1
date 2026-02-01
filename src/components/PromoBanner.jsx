import { Flame, BadgePercent, Truck, ShieldCheck } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="bg-black/40 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔥 Limited Time Offer: UnlockTool v2026.08 – 15% OFF!
            </h2>
            <p className="text-base md:text-lg mb-6">
              Official distributor license. Unlock 2000+ Android & iOS devices. Includes lifetime updates + FRP & IMEI repair.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded">
                <ShieldCheck size={18} /> <span className="text-sm">Official Reseller</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded">
                <Truck size={18} /> <span className="text-sm">Fast Worldwide Shipping</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded">
                <BadgePercent size={18} /> <span className="text-sm">Bulk Discount Available</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#shop"
                className="bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-neutral-100 transition"
              >
                Shop Now
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white hover:bg-white/20 text-white px-6 py-3 rounded transition text-center"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/08/28/GD4gusbk_SamsungTool12Months.png"
              alt="UnlockTool Pro 2026"
              className="w-full rounded-xl shadow-lg"
            />
            <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
              Best Seller
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
