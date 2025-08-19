// src/components/ServicesSection.tsx
import React from 'react';

// Data for the service cards
const servicesData = [
  {
    title: 'Adult & Child Psychiatry',
    description: 'Managing complex mental health concerns with compassion, clinical expertise, and a long-term commitment to care.',
    icon: (
      // Placeholder for a brain icon
     
      <img src="icons/family.png" alt="Adults & Child Psychiatry" />
    ),
  },
  {
    title: 'Telepsychiatry',
    description: 'Secure virtual appointments for patients who prefer the convenience of remote care, without compromising quality.',
    icon: (
      // Placeholder for a phone/telehealth icon
      <img src="/icons/doctor.png" alt="telehealth" />
      
    ),
  },
  {
    title: 'Medication Management',
    description: 'Carefully monitored prescriptions personalized to your evolving needs, rooted in trust, safety, and transparency.',
    icon: (
      // Placeholder for a pills bottle icon
      <img src="/icons/antidepressants (1).png" alt="Medication management" />
      
    ),
  },
];

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode; }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="w-16 h-16 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-primary-purple mb-2 text-lavender">{title}</h3>
    <p className="text-medium-gray">{description}</p>
  </div>
);

export default function PersonalizedCare() {
  return (
    <section className="bg-light-gray py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray mb-4 leading-tight">
            PERSONALIZED MENTAL HEALTH CARE <br />
            That's as Unique as You.
          </h2>
          <p className="text-lg sm:text-xl text-medium-gray max-w-3xl mx-auto">
            At Optimum Quality Behaviour Health Psychiatry, we offer more than treatment; we offer compassion. Our services are designed to meet you where you are, with flexible care options and thoughtful, evidence-based support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}