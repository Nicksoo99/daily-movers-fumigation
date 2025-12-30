import React from 'react';
import { Truck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Truck size={24} />
              </div>
              <span className="font-bold text-xl text-white">Daily Movers Fumigation</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your reliable partner for stress-free residential & commercial moving and effective pest control solutions in Nairobi.
            </p>
            <div className="text-slate-400 mb-4">
               <p className="mb-2">📍 Kilimani, Nairobi</p>
               <p>📞 0717629399</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Residential Moving</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Office Relocation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Fumigation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pest Control</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Packing Services</a></li>
            </ul>
          </div>

          {/* Newsletter (Mock) */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for tips and offers.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border-none text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button className="bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Daily Movers Fumigation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
