import Image from "next/image";

type Insurance = {
  name: string;
  logo: string;
};

const insurances: Insurance[] = [
  { name: "Oscar", logo: "/images/insurances/oscar.png" },
  { name: "Oxford Life Insurance", logo: "/images/insurances/oxford.png" },
  { name: "United Healthcare", logo: "/images/insurances/united.png" },
  { name: "Carelon", logo: "/images/insurances/carelon.png" },
  { name: "Horizon", logo: "/images/insurances/horizon.png" },
  { name: "BlueCross BlueShield of Illinois", logo: "/images/insurances/bcbs-illinois.png" },
  { name: "Massachusetts", logo: "/images/insurances/massachusetts.png" },
  { name: "Independence Blue Cross", logo: "/images/insurances/independence.png" },
  { name: "Aetna", logo: "/images/insurances/aetna.png" },
  { name: "Cigna", logo: "/images/insurances/cigna.png" },
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
                width={150}
                height={80}
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
