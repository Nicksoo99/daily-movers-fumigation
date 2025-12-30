import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1746985106190-6c116edec9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb3ZpbmclMjB0cnVjayUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2NjM5NzAwNnww&ixlib=rb-4.1.0&q=80&w=1920" 
          alt="Moving Truck" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 mb-6 backdrop-blur-sm">
              <ShieldCheck size={16} />
              <span className="text-sm font-medium">Licensed & Insured Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
              Daily Movers Fumigation
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-6">
              Stress-Free Moving & Pest Control
            </h2>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              We handle the heavy lifting and keep your space pest-free. 
              Reliable relocation services and effective pest control solutions for homes and businesses in Kilimani, Nairobi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-12 px-8" onClick={() => window.open('https://wa.me/254717629399?text=Hello%20Daily%20Movers%2C%20I%20would%20like%20to%20get%20a%20free%20quote', '_blank')}>
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-lg h-12 px-8">
                Our Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white/80">
              <div>
                <p className="text-3xl font-bold text-white">5k+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
