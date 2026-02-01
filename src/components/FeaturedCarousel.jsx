import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const featuredProducts = [ { id: 1, title: 'UnlockTool Pro Dongle', rating: 5, description: 'Lifetime license. Unlock 2000+ models incl. Xiaomi, Samsung, Huawei. Fast FRP removal & carrier unlock.', image: 'https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/08/28/GD4gusbk_SamsungTool12Months.png', }, { id: 2, title: 'Octoplus Box v4.0', rating: 4, description: 'FRP reset, IMEI repair & carrier unlock for Samsung, LG, Huawei.', image: 'https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/xl7WTg6j_HXRU_AUTH_TOOL.png', }, { id: 3, title: 'iPhone 13 Pro Max OLED Screen', rating: 5, description: 'Genuine display. Crystal-clear visuals. Ideal for premium repairs.', image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600', }, { id: 4, title: 'Miracle Thunder Edition', rating: 4, description: 'Flash & unlock Vivo, Itel, Lava and more in one compact tool.', image: 'https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/bAQ40rzl_Android_Multi_Tool_Credits.png', }, { id: 5, title: 'Octoplus Box v4.0', rating: 4, description: 'FRP reset, IMEI repair & carrier unlock for Samsung, LG, Huawei.', image: 'https://static.dhrufusion.com/8ba55f6b-3543-4e75-a3f9-3eb84c6a6176/2025/06/04/xl7WTg6j_HXRU_AUTH_TOOL.png', }, { id: 6, title: 'iPhone 13 Pro Max OLED Screen', rating: 5, description: 'Genuine display. Crystal-clear visuals. Ideal for premium repairs.', image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600', }, ];
export default function FeaturedCarousel({featuredProductCarousel}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-20 bg-white" id="featured">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Featured Products
          </h2>
          <div className="hidden md:flex space-x-2">
            <button
              ref={prevRef}
              disabled={isBeginning}
              className={`p-2 rounded-full transition ${
                isBeginning
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  : 'bg-neutral-100 hover:bg-primary/10 cursor-pointer'
              }`}
            >
              <ChevronLeft />
            </button>
            <button
              ref={nextRef}
              disabled={isEnd}
              className={`p-2 rounded-full transition ${
                isEnd
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  : 'bg-neutral-100 hover:bg-primary/10 cursor-pointer'
              }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {featuredProductCarousel.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-all min-h-[340px] flex flex-col overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm font-semibold text-neutral-800 leading-snug line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-yellow-400 mt-1 mb-1">
                    {Array.from({ length: product.rating }).map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600 flex-grow line-clamp-3">
                    {product.description}
                  </p>
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full text-center bg-primary text-white text-sm py-2 rounded-lg hover:bg-primary-dark transition"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Arrows */}
        <div className="flex justify-center space-x-4 mt-8 md:hidden">
          <button
            onClick={() => prevRef.current?.click()}
            disabled={isBeginning}
            className={`p-2 rounded-full transition ${
              isBeginning
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-neutral-200 hover:bg-primary/10 cursor-pointer'
            }`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => nextRef.current?.click()}
            disabled={isEnd}
            className={`p-2 rounded-full transition ${
              isEnd
                ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'bg-neutral-200 hover:bg-primary/10 cursor-pointer'
            }`}
          >
            <ChevronRight />
          </button>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-block px-6 py-3 text-sm font-semibold text-white bg-black rounded-lg hover:bg-neutral-800 transition"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
