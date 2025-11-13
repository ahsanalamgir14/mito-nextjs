import React from 'react';

const testimonials = [
  {
    quote: "Booking my appointment was incredibly easy and fast. The staff was so helpful in confirming my slot. Highly recommend!",
    name: 'Sarah Johnson',
    image: 'https://picsum.photos/100/100?random=1',
    rating: 5,
  },
  {
    quote: "I found a great specialist near me and was able to request a visit in minutes. The whole process is very modern and user-friendly.",
    name: 'Michael Chen',
    image: 'https://picsum.photos/100/100?random=2',
    rating: 5,
  },
  {
    quote: "As a busy professional, I appreciate how this service respects my time. The communication was clear and prompt.",
    name: 'Emily Rodriguez',
    image: 'https://picsum.photos/100/100?random=3',
    rating: 4,
  },
];

// FIX: Changed component typing to React.FC to correctly handle the 'key' prop provided during mapping.
const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We are proud to provide exceptional care and service to our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < testimonial.rating} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};