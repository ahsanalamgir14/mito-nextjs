
import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const appointmentFormRef = useRef<HTMLDivElement>(null);

  const scrollToAppointmentForm = () => {
    appointmentFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header onBookAppointmentClick={scrollToAppointmentForm} />
      <main>
        <Hero onBookAppointmentClick={scrollToAppointmentForm} />
        <Services />
        <HowItWorks />
        <Testimonials />
        <div ref={appointmentFormRef}>
          <AppointmentForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
