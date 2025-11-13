
import React, { useState } from 'react';
import type { AppointmentData } from '../types';
import { generateConfirmationMessage } from '../services/geminiService';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setConfirmationMessage(null);

    try {
      const message = await generateConfirmationMessage(formData);
      setConfirmationMessage(message);
      setFormData({ name: '', email: '', phone: '', date: '', time: '', reason: '' });
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Request an Appointment</h2>
            <p className="text-lg text-gray-600 mt-4">
              Fill out the form below and we'll get back to you to confirm your visit.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
               <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-gray-500"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
             <div>
               <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-gray-500"
              />
            </div>
            <div>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason for Visit"
                rows={4}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto bg-teal-500 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-teal-600 transition-transform duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending Request...' : 'Submit Request'}
              </button>
            </div>
          </form>

          {confirmationMessage && (
            <div className="mt-8 p-4 bg-green-100 text-green-800 border-l-4 border-green-500 rounded-r-lg">
              <h3 className="font-bold">Request Received!</h3>
              <p>{confirmationMessage}</p>
            </div>
          )}

          {error && (
            <div className="mt-8 p-4 bg-red-100 text-red-800 border-l-4 border-red-500 rounded-r-lg">
              <h3 className="font-bold">Error</h3>
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
