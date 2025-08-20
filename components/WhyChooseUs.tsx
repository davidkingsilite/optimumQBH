'use client';


import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Using Heroicons for icons
import { useRouter} from 'next/navigation';


interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: 'Board-Certified Expertise:',
    description: 'Led by Dr. Tomilola Adewolu, DNP, a dynamic Psychiatric Nurse Practitioner with a doctorate and 15 years of experience in behavioral health.',
  },
  {
    title: 'Care That Puts You First:',
    description: 'We masterfully manages a wide array of mental health disorders with flexible appointment options tailored to your schedule.',
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
            <h2 className="text-3xl font-bold text-lavender mb-6">Why Choose Optimum Quality Behavioral Health Psychiatry?</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
            A strong doctor-patient relationship is the foundation of effective mental health care. At Optimum Quality Behavioral Health Psychiatry, we focus on treating you as a whole person, building a partnership based on trust, mutual respect, and a commitment to the highest standards of professional care.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-lavender mb-1">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 shadow-lg rounded-lg overflow-hidden relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-blue-900/10 after:rounded-lg after:z-0">
            <Image
              src="/Group-1000001859 (1).png" // Replace with your actual image
              alt="A compassionate psychiatrist comforting a patient."
              width={400}
              height={500}
              className="object-cover w-full h-full z-10 relative rounded-full"
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