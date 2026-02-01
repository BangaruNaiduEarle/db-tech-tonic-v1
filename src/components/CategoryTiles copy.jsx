const categories = [
  {
    title: 'iPhone & Android Spare Parts',
    keyword: 'Screens, Batteries, Cameras & More for iPhone, Samsung, Xiaomi…',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categoryBrand/spare-parts',
  },
  {
    title: 'Unlocking Tools & Licenses',
    keyword: 'Unlock FRP, Pattern & Carrier locks on Android/iOS',
    image: 'https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/08/28/GD4gusbk_SamsungTool12Months.png',
    link: '/categoryBrand/unlocking-tools',
  },
  {
    title: 'Dongles & Flash Boxes',
    keyword: 'Octoplus, Miracle, UMT, Z3X & more for JTAG/USB Repair',
    image: 'https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/xl7WTg6j_HXRU_AUTH_TOOL.png',
    link: '/categoryBrand/flash-dongles',
  },
  {
    title: 'Accessories & Cables',
    keyword: 'Data Cables, Adapters, Jumpers & Repair Accessories',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categoryBrand/accessories',
  },
  {
    title: 'Server Credits',
    keyword: 'Instant FRP, IMEI, iCloud Credits – Auto-Activated',
    image: 'https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/bAQ40rzl_Android_Multi_Tool_Credits.png',
    link: '/categoryBrand/server-credits',
  },
  {
    title: 'Bundles & Promotions',
    keyword: 'Combo Bundles: Tools + Parts Packages',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/categoryBrand/bundles',
  },
];


export default function CategoryTiles() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 drop-shadow-sm">
            Explore Our Product Categories
          </h2>
          <p className="mt-2 text-base md:text-lg text-neutral-600 max-w-xl mx-auto">
            Genuine Tools & Spare Parts Tailored for Mobile Repair Professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.link}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 shadow hover:shadow-xl hover:scale-[1.015] transition-transform duration-300"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <div className="bg-black/60 p-3 rounded-md">
                  <h3 className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-neutral-200 mt-1">{cat.keyword}</p>
                </div>
              </div>
            </a>

          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/categories"
            className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-black text-sm md:text-base font-semibold rounded-lg shadow-md transition-all"
          >
            See All Categories
          </a>
        </div>
      </div>
    </section>
  );
}

