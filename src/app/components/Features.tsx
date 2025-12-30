import { CheckCircle, Clock, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const features = [
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind. Your property is protected with us.",
    icon: Shield,
  },
  {
    title: "Experienced Team",
    description: "Our staff is professionally trained, background-checked, and experienced in handling delicate items.",
    icon: Users,
  },
  {
    title: "Eco-Friendly Solutions",
    description: "We use environmentally safe products for fumigation that are tough on pests but safe for your family.",
    icon: CheckCircle,
  },
  {
    title: "On-Time Guarantee",
    description: "We respect your time. Punctuality and efficiency are core values of our service delivery.",
    icon: Clock,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine expertise, reliability, and care to deliver the best moving and pest control experience. Here is why thousands of customers trust us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <feature.icon className="text-green-600 h-6 w-6" />
                    <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <ImageWithFallback
                 src="https://images.unsplash.com/photo-1758522965291-36664fbdac9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0JTIwY29udHJvbCUyMGZ1bWlnYXRpb24lMjB3b3JrZXIlMjBwcm90ZWN0aXZlJTIwZ2VhcnxlbnwxfHx8fDE3NjYzOTY3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                 alt="Professional Fumigation Worker"
                 className="w-full h-auto object-cover"
               />
             </div>
             {/* Decor element */}
             <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm opacity-90">Years Experience</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
