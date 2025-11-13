
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const steps = [
  {
    number: '01',
    title: 'Find Your Doctor',
    description: 'Search through our extensive list of specialists to find the right one for your needs.',
  },
  {
    number: '02',
    title: 'Request an Appointment',
    description: 'Select a preferred date and time, fill out a simple form, and submit your request in seconds.',
  },
  {
    number: '03',
    title: 'Get Confirmation',
    description: 'Our team will contact you to confirm your appointment details and prepare you for your visit.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Easy Steps to Get Care</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Booking your appointment is simple, fast, and secure.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-teal-200 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center bg-gray-50 px-4">
                 <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 bg-white rounded-full shadow-lg border-2 border-teal-500">
                   <span className="text-2xl font-bold text-teal-500">{step.number}</span>
                 </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
