'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/constants/index';

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  return (
    <Link href={`/services/${service.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={250}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
