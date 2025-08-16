// src/components/ServicesSection.tsx
import React from 'react';

// Data for the service cards
const servicesData = [
  {
    title: 'Adult & Child Psychiatry',
    description: 'Managing complex mental health concerns with compassion, clinical expertise, and a long-term commitment to care.',
    icon: (
      // Placeholder for a brain icon
      <svg className="w-16 h-16 text-brand-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
        <path d="M10 10h4"></path>
        <path d="M10 14h4"></path>
        <path d="M8 12h8"></path>
      </svg>
    ),
  },
  {
    title: 'Telepsychiatry',
    description: 'Secure virtual appointments for patients who prefer the convenience of remote care, without compromising quality.',
    icon: (
      // Placeholder for a phone/telehealth icon
      <svg className="w-16 h-16 text-brand-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
  },
  {
    title: 'Medication Management',
    description: 'Carefully monitored prescriptions personalized to your evolving needs, rooted in trust, safety, and transparency.',
    icon: (
      // Placeholder for a pills bottle icon
      <svg className="w-16 h-16 text-brand-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11V7a4 4 0 0 0-8 0v4"></path>
        <path d="M12 11h2"></path>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      </svg>
    ),
  },
];

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode; }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="w-16 h-16 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-primary-purple mb-2">{title}</h3>
    <p className="text-medium-gray">{description}</p>
  </div>
);

export default function PersonalizedCare() {
  return (
    <section className="bg-light-gray py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray mb-4 leading-tight">
            PERSONALIZED PSYCHIATRIC CARE <br />
            That Fits Your Life
          </h2>
          <p className="text-lg sm:text-xl text-medium-gray max-w-3xl mx-auto">
            At Optimum Quality Behaviour Health Psychiatry, we offer more than treatment; we offer understanding. Our services are designed to meet you where you are, with flexible care options and thoughtful, evidence-based support.
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