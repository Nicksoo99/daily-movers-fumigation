import React from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

export function About() {
  const benefits = [
    "Professional & Trained Staff",
    "Eco-Friendly Fumigation Products",
    "Fully Insured & Licensed",
    "Transparent Pricing - No Hidden Fees",
    "24/7 Customer Support",
    "Timely Delivery Guarantee"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1690768162465-f0d96cc372a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpbmclMjBob3VzZSUyMGNhcmRib2FyZCUyMGJveGVzJTIwYnJpZ2h0fGVufDF8fHx8MTc2NjM5NzAwNnww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Moving Day" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
              <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
              <p className="text-gray-700 font-medium">Years of delivering excellence in moving and pest control.</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for <br />
              <span className="text-blue-600">Relocation & Hygiene</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Daily Movers Fumigation, we understand that moving can be stressful and pests can be a nuisance. 
              That's why we've combined our expertise to offer a seamless transition for your home or office, 
              ensuring a clean and safe environment from day one.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
              More About Us
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
