import Image from "next/image";

export default function ExpertSection() {
  const experts = [
    {
      name: "Dr Tomi",
      title: "PMHNP-BC, FNP-BC",
      description:
        "As a dual board-certified Nurse Practitioner in psychiatry and family medicine, Tomi brings over 15 years of experience treating complex mental health needs in both adults and children. She’s known for her compassionate care, clinical depth, and her ability to understand the full picture, both mind and body.",
      image: "/Screenshot 2025-08-08 at 10.31.40.png",
      link: "#",
    },
    {
      name: "Dr. Onyeisi Stephen",
      title: "PMHNP-BC, FNP-BC",
      description:
        "As a dual board-certified Nurse Practitioner in psychiatry and family medicine, Jill brings over 18 years of experience treating complex mental health needs in both adults and children. She’s known for her compassionate care, clinical depth, and her ability to understand the full picture, both mind and body.",
      image: "/Screenshot 2025-08-08 at 10.31.40.png",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl font-bold text-lavender mb-12 text-center">
          Meet Our Experts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-20 items-center">
          {experts.map((expert, index) => (
            <div key={expert.name} className="flex flex-col md:flex-row gap-6">
              {/* Left Side - Image with backgrounds */}
              <div className="relative flex justify-center items-center w-full md:w-1/2">  
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={350}
                  height={350}
                  className="relative z-10 object-cover rounded-md"
                  priority
                />
              </div>

              {/* Right Side - Text */}
              <div className="w-full md:w-1/2 mt-5">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {expert.name},{" "}
                  <span className="italic">{expert.title}</span>
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {expert.description}
                </p>
                <a
                  href={expert.link}
                  className="inline-block bg-sky-400 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
