'use client';
// import Image from 'next/image';
// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="relative h-[500px] w-full overflow-hidden">
//       <Image
//         src="/hero.jpg"
//         alt="Therapist and patient"
//         fill
//         className="object-cover"
//         priority
//       />

//       <div className="absolute inset-0 bg-gradient-to-r from-purple via-purple/60 to-transparent" />

//       <div className="relative z-10 p-10 max-w-2xl">
//         <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">Welcome To</h2>
//         <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight">
//           Optimum Quality Behavioral Health
//         </h1>
//         <p className="text-sm md:text-base text-gray-800 max-w-md">
//           At Optimum Quality Behavioral Health PLLC, we are committed to nurturing minds and transforming lives.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// components/HeroSection.tsx
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[600px] overflow-hidden">
//       {/* Main Background Image */}
//       <Image
//         src="/adobexpress.png" // Replace with your image
//         alt="Counseling session"
//         fill
//         priority
//         className="object-cover"
//       />

      {/* {/* Purple Transparent Overlay */}
      {/* <div className="absolute inset-0 bg-[#BA92D6] opacity-70"></div> */}

      {/* Second Image Overlay */}
      {/* <Image
        src="/mental-ill.png" // Replace with your image
        alt="Notebook"
        fill
        className="object-cover opacity-20 mix-blend-overlay"
      /> */}

      {/* Hero Text */}
      {/* <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Your Path to Better Mental Health
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
          Compassionate care, personalized therapy, and professional guidance to help you thrive.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-400 text-black font-semibold rounded-lg shadow-lg hover:bg-green-500 transition">
          Book an Appointment
        </button>
      </div> */}

      {/* Green Curve SVG */}
      {/* <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#90D4B2"
          fillOpacity="1"
          d="M0,160L80,165.3C160,171,320,181,480,181.3C640,181,800,171,960,176C1120,181,1280,203,1360,213.3L1440,224V0H0Z"
        ></path>
      </svg> */}

      {/* White Swoosh Separator */}
//       <svg
//         className="absolute bottom-0 left-0 w-full translate-y-full"
//         viewBox="0 0 1440 80"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           fill="#fff"
//           d="M0,32 C480,80 960,-16 1440,32 L1440,80 L0,80 Z"
//         ></path>
//       </svg>
//     </section>
//   );
// }



// src/components/AnimatedSwiper.tsx


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import React from 'react';

// Sample data for your slides
const slides = [
  { id: 1, image: '/bigjpg/oqbh1.png', alt: 'Slide 1' },
  { id: 2, image: '/bigjpg/oqbh2.png', alt: 'Slide 2' },
  { id: 3, image: '/bigjpg/oqbh3.png', alt: 'Slide 3' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/ezgif.com-webp-maker.webp"
        autoPlay
        loop
        muted
        playsInline
      /> */}
<div className='relative w-full h-[600px] flex items-center justify-center overflow-hidden'>
<Swiper
        modules={[Pagination, EffectCreative, Autoplay]}
        effect="creative"
        grabCursor={true}
        speed={1000}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
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
                            ${isActive ? 'animate-zoom-in' : 'animate-fade-out'}`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                {/* Example of a pulsing element */}
                <span className="absolute top-4 left-4 size-4 rounded-full bg-red-500 animate-pulse" />
                  
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
           {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>

              {/* Hero Content */}
              <div className="absolute z-10 text-center text-white px-4 bottom-20 self-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple">
                Welcome to Our Practice
              </h1>
             <p className="text-lg md:text-xl max-w-2xl mx-auto">
               Compassionate mental health care designed to help you thrive.
             </p>
              <button className="mt-6 px-6 py-3 bg-purple hover:bg-lavender rounded-lg font-medium">
                 Book an Appointment
               </button>
             </div>
      
      </div>
    </section>
  );
};

export default Hero;

