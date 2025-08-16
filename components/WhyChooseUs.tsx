'use client';


import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Using Heroicons for icons
import { useRouter, usePathname } from 'next/navigation';


interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: 'Board-Certified Expertise:',
    description: 'Led by Jill Powers, PMHNP-BC, FNP-BC—dual board-certified with over 18 years of experience in both psychiatry and primary care.',
  },
  {
    title: 'Care That Puts You First:',
    description: 'We develop treatment plans around your goals, values, and medical history, not one-size-fits-all solutions.',
  },
  {
    title: 'Convenient, Accessible Appointments:',
    description: 'We offer both in-person visits in Chicago and telehealth services across the state of Illinois.',
  },
];

const WhyChooseUs = () => {

    const router = useRouter();

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Optimum Quality Behavioral Health Psychiatry?</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Choosing a psychiatric provider is deeply personal. At Optimum Quality Behavioral Health Psychiatry, we build every relationship on compassion, respect, and clinical excellence.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 shadow-lg rounded-lg overflow-hidden relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-blue-900/10 after:rounded-lg after:z-0">
            <Image
              src="/Screenshot 2025-08-08 at 10.30.16.png" // Replace with your actual image
              alt="A compassionate psychiatrist comforting a patient."
              width={600}
              height={700}
              className="object-cover w-full h-full z-10 relative"
            />
            
          </div>
          
        </div>
        <button
            onClick={() => router.push('/contact')}
            className="flex mt-10 ml-4 px-6 py-3 border border-black text-white rounded bg-purple hover:bg-green font-medium transition"
          >
            MAKE AN APPOINTMENT
          </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;