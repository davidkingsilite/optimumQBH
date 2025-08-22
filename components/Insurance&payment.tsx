import Image from "next/image";

type Insurance = {
  name: string;
  logo: string;
};

const insurances: Insurance[] = [
  { name: "Oscar", logo: "/insurance/oscar.png" },
  { name: "Oxford Life Insurance", logo: "/insurance/oxford-life-ins.png" },
  { name: "United Healthcare", logo: "/insurance/united-health.png" },
  { name: "Carelon", logo: "/insurance/carelon.png" },
  { name: "Horizon", logo: "/insurance/horizon.png" },
  { name: "BlueCross BlueShield of Illinois", logo: "/insurance/bluecross-blue-shield-illinois.png" },
  { name: "Massachusetts", logo: "/insurance/bluecross-blue-shield-massachusetts.png" },
  { name: "Independence Blue Cross", logo: "/insurance/independent-blue-cross.png" },
  { name: "Aetna", logo: "/insurance/aetna.png" },
  { name: "Cigna", logo: "/insurance/cigna.png" },
];

export default function InsuranceSection() {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#0C1B4D] mb-2">
          Insurance & Payment Options
        </h2>
        <p className="text-gray-600 mb-4">
          We work with a wide network of insurers to make care more accessible for our patients.
        </p>
        <h3 className="text-lg font-semibold mb-8">Currently Accepted Plans:</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
          {insurances.map((insurance) => (
            <div
              key={insurance.name}
              className="flex justify-center items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Image
                src={insurance.logo}
                alt={insurance.name}
                width={130}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <button className="bg-[#00AEEF] hover:bg-[#0098d4] text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
          CHECK YOUR COVERAGE
        </button>
      </div>
    </section>
  );
}
