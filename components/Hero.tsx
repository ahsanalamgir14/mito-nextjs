
import React from 'react';

interface HeroProps {
  onBookAppointmentClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookAppointmentClick }) => {
  return (
    <section className="relative bg-white pt-20 pb-20 md:pt-32 md:pb-32">
       <div className="absolute inset-0 bg-teal-500 opacity-5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Quality Healthcare,
          <br />
          <span className="text-teal-500">Just a Click Away</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Easily find and book appointments with trusted doctors in your area. Your health is our priority, and we've made scheduling care simpler than ever.
        </p>
        <button
          onClick={onBookAppointmentClick}
          className="bg-teal-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-teal-600 transition-transform duration-300 transform hover:scale-105 shadow-xl"
        >
          Request an Appointment
        </button>
      </div>
    </section>
  );
};
