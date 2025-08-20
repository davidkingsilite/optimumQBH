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
      <div className="bg-white w-[350px] h-[350px] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={300}
          height={175}
          className="w-full h-58 object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-2xl"
        />
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.exerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

