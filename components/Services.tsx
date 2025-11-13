
import React from 'react';
import { StethoscopeIcon } from './icons/StethoscopeIcon';
import { ToothIcon } from './icons/ToothIcon';
import { ChildIcon } from './icons/ChildIcon';
import { HeartIcon } from './icons/HeartIcon';

const services = [
  {
    icon: <StethoscopeIcon />,
    title: 'General Checkup',
    description: 'Comprehensive physical examinations and preventive health screenings for all ages.',
  },
  {
    icon: <ToothIcon />,
    title: 'Dental Care',
    description: 'Complete dental services, from routine cleanings to advanced restorative treatments.',
  },
  {
    icon: <ChildIcon />,
    title: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
  },
  {
    icon: <HeartIcon />,
    title: 'Cardiology',
    description: 'Expert diagnosis and treatment of heart conditions and cardiovascular diseases.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Medical Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer a wide range of services to meet your family's health needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="inline-block p-4 bg-teal-100 text-teal-500 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
