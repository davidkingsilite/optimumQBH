'use client';

import ServiceCard from './ServiceCard';
import { services } from '@/constants/index'; 
import { useRouter } from 'next/navigation';


const ServiceList = () => {
    const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <button className='mt-10 ml-2 px-6 py-3 border border-black text-white rounded bg-purple hover:bg-green' onClick={() => router.push('/services')}>
         See All Services
      </button>
    </section>
  );
};

export default ServiceList;
