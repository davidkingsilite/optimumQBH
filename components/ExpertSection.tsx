// import Image from "next/image";

// export default function ExpertSection() {
//   return (
//     <section className="w-full bg-white py-16">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//         {/* Left Side - Image with background shape */}
//         <div className="relative flex justify-center items-center">
//           {/* Background shape */}
//           <div className="absolute -z-10 w-80 h-80 bg-indigo-900 rounded-[50%] rotate-[-15deg]" />
          
//           {/* Profile image */}
//           <Image
//             src="/Screenshot 2025-08-08 at 10.31.40.png" // replace with your image
//             alt="Jill Powers"
//             width={350}
//             height={350}
//             className="relative z-10 object-cover"
//             priority
//           />
//         </div>

//         {/* Right Side - Text */}
//         <div>
//           <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
//             Meet Our Expert
//           </h2>
//           <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
//             Jill Powers, <span className="italic">PMHNP-BC, FNP-BC</span>
//           </h3>
//           <p className="text-gray-700 mb-6">
//             As a dual board-certified Nurse Practitioner in psychiatry and family medicine, Jill brings over 18 years of experience treating complex mental health needs in both adults and children. She’s known for her compassionate care, clinical depth, and her ability to understand the full picture, both mind and body.
//           </p>
//           <a
//             href="#"
//             className="inline-block bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
//           >
//             LEARN MORE ABOUT JILL
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function ExpertSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image with layered backgrounds */}
        <div className="relative flex justify-center items-center">

          {/* Floral outline background */}
          <svg
            className="absolute z-10 w-[500px] h-[500px] opacity-20 text-gray-300"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M250,25C280,75,320,100,350,150C380,200,400,250,350,300C300,350,250,400,200,350C150,300,120,250,150,200C180,150,220,75,250,25Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M150,100C180,140,200,180,220,220C240,260,260,300,220,340C180,380,140,340,120,300C100,260,80,180,150,100Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Blob background */}
          <svg
            className="absolute z-10 w-[420px] h-[420px] text-indigo-900"
            viewBox="0 0 500 500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M437.5,312.5Q400,375,337.5,425Q275,475,200,450Q125,425,87.5,362.5Q50,300,62.5,225Q75,150,137.5,87.5Q200,25,275,50Q350,75,412.5,137.5Q475,200,437.5,312.5Z" />
          </svg>

          {/* Profile image */}
          <Image
            src="/Screenshot 2025-08-08 at 10.31.40.png" // replace with your own image path
            alt="Jill Powers"
            width={350}
            height={350}
            className="relative z-10 object-cover rounded-md"
            priority
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            Meet Our Expert
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Jill Powers, <span className="italic">PMHNP-BC, FNP-BC</span>
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            As a dual board-certified Nurse Practitioner in psychiatry and family medicine, Jill brings over 18 years of experience treating complex mental health needs in both adults and children. She’s known for her compassionate care, clinical depth, and her ability to understand the full picture, both mind and body.
          </p>
          <a
            href="#"
            className="inline-block bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            LEARN MORE ABOUT JILL
          </a>
        </div>
      </div>
    </section>
  );
}
