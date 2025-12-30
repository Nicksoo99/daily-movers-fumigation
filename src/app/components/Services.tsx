import React from 'react';
import { Truck, Bug, Box, Shield, Home, SprayCan } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const services = [
  {
    title: "Residential Moving",
    description: "Careful handling of your household goods. We pack, load, transport, and unpack with utmost care.",
    icon: Home,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Office Relocation",
    description: "Efficient business moving services to minimize downtime. We handle IT equipment and office furniture.",
    icon: Truck,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Pest Control",
    description: "Comprehensive fumigation services to eliminate cockroaches, rodents, mosquitoes, and other pests.",
    icon: Bug,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Disinfection Services",
    description: "Professional sanitization and disinfection for homes and offices to ensure a healthy environment.",
    icon: SprayCan,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Packing Services",
    description: "High-quality packing materials and expert packers to ensure your belongings are safe during transit.",
    icon: Box,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Secure Storage",
    description: "Short-term and long-term storage solutions in our secure, climate-controlled warehouses.",
    icon: Shield,
    color: "bg-purple-100 text-purple-600",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of relocation and pest control services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-6">
                  {service.description}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700">
                  Learn More &rarr;
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
