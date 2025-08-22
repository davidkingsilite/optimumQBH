// import { services } from '@/constants/index';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';

// interface Props {
//   params: { slug: string };
// }

// export async function generateStaticParams() {
//   return services.map(service => ({ slug: service.slug }));
// }

// export default function ServiceDetail({ params }: Props) {
//   const service = services.find(s => s.slug === params.slug);
//   if (!service) return notFound();

//   return (
//     <section className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold text-black mb-4">{service.title}</h1>
//       <Image src={service.image} alt={service.title} className="w-full h-72 object-cover rounded-md mb-6" />
//       <p className="text-gray-700 text-base leading-7">{service.description}</p>
//     </section>
//   );
// }

import { services } from '@/constants/index';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

// ✅ Generate static params for SSG
export async function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export default async function ServiceDetail({ params }: Props) {
  // ✅ must await params in Next 15
  const { slug } = await params;

  const service = services.find(s => s.slug === slug);
  if (!service) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-black mb-4">{service.title}</h1>
      <Image
        src={service.image}
        alt={service.title}
        width={800}
        height={400}
        className="w-full h-72 object-cover rounded-md mb-6"
      />
      <p className="text-gray-700 text-base leading-7">
        {service.description}
      </p>
    </section>
  );
}
