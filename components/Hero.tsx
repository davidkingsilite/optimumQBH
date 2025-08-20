'use client';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import React from 'react';
import Image from 'next/image';

// Sample data for your slides
const slides = [
  { id: 1, image: '/bigjpg/oqbh1.png', alt: 'Slide 1' },

  { id: 3, image: '/bigjpg/oqbhadobe.png', alt: 'Slide 3' },
  { id: 4, image: '/bigjpg/oqbhadobe2.png', alt: 'Slide 4' },
  { id: 5, image: '/bigjpg/oqbh6.png', alt: 'Slide 5' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      {/* <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/ezgif.com-webp-maker.webp"  
      /> */}

<Swiper
        modules={[Pagination, EffectCreative, Autoplay]}
        effect="creative"
        grabCursor={true}
        speed={1000}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: ['-100%', 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div
                className={`flex relative w-full h-full transition-all duration-1000 ease-in-out
                            ${isActive ? 'animate-zoom-in' : ''}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
               
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper> 
           {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

              {/* Hero Content */}
              <div className="absolute z-10 text-center text-black px-4 bottom-20 left-5 lg:w-1/2 self-center font-bevietnam">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Welcome to <br />
                Optimum Quality Behavioral Health
              </h1>
             <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow text-white">
               Compassionate mental health care designed to help you thrive.
             </p>
              <button className="mt-6 px-6 py-3 bg-purple hover:bg-lavender rounded-lg font-medium text-white">
                 Book an Appointment
               </button>
             </div>
      
      
    </section>
  );
};

export default Hero;

