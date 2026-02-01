import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Premium icons

import { motion } from 'framer-motion';

export default function HeroBanner({ herobanners }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Bind navigation refs after Swiper is initialized
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {herobanners.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <img
                src={slide.imageUrl}
                alt={slide.heading}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 text-center">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl mb-5 leading-tight"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.heading}
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl text-neutral-200 max-w-2xl mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.subheading}
                </motion.p>

                <motion.a
                  href={slide.ctaLink}
                  className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white text-sm md:text-base font-semibold rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {slide.ctaText}
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Premium Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="custom-prev absolute z-30 left-4 top-1/2 -translate-y-1/2 bg-white/90 text-black hover:bg-primary hover:text-white hover:bg-black/20 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          ref={nextRef}
          className="custom-next absolute z-30 right-4 top-1/2 -translate-y-1/2 bg-white/90 text-black hover:bg-primary hover:text-white hover:bg-black/20  rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition duration-300"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </Swiper>
    </section>
  );
}
