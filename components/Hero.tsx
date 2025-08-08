// 'use client';
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
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Main Background Image */}
      <Image
        src="/mental-ill.png" // Replace with your image
        alt="Counseling session"
        fill
        priority
        className="object-cover"
      />

      {/* {/* Purple Transparent Overlay */}
      <div className="absolute inset-0 bg-[#BA92D6] opacity-70"></div>

      {/* Second Image Overlay */}
      <Image
        src="/mental-ill2.png" // Replace with your image
        alt="Notebook"
        fill
        className="object-cover opacity-20 mix-blend-overlay"
      />

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Your Path to Better Mental Health
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
          Compassionate care, personalized therapy, and professional guidance to help you thrive.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-400 text-black font-semibold rounded-lg shadow-lg hover:bg-green-500 transition">
          Book an Appointment
        </button>
      </div>

      {/* Green Curve SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#90D4B2"
          fillOpacity="1"
          d="M0,160L80,165.3C160,171,320,181,480,181.3C640,181,800,171,960,176C1120,181,1280,203,1360,213.3L1440,224V0H0Z"
        ></path>
      </svg>

      {/* White Swoosh Separator */}
      <svg
        className="absolute bottom-0 left-0 w-full translate-y-full"
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          d="M0,32 C480,80 960,-16 1440,32 L1440,80 L0,80 Z"
        ></path>
      </svg>
    </section>
  );
}

