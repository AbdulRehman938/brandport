import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Warehouse,
  TrendingUp,
  Settings,
  ShoppingCart,
  Truck,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    icon: <Warehouse size={28} strokeWidth={1.5} />,
    title: "Logistics & Infrastructure",
    description:
      "Dedicated warehouses, in-house logistics, and fulfillment infrastructure across the US-Mexico corridor. We manage inventory, order processing, and last-mile delivery with precision.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    title: "Brand Development",
    description:
      "Strategic positioning and market adaptation. We optimize product placement, adapt to local dynamics, and unlock new revenue channels through retail and e-commerce.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Settings size={28} strokeWidth={1.5} />,
    title: "Operational Excellence",
    description:
      "Vertical integration provides full visibility, operational efficiency, and scalable growth. Partners gain cross-border capabilities without operational friction.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    color: "from-purple-500 to-pink-500",
  },
];

const additionalServices = [
  {
    icon: <ShoppingCart size={24} />,
    title: "E-Commerce Integration",
    description: "Seamless marketplace connections",
  },
  {
    icon: <Truck size={24} />,
    title: "Cross-Border Shipping",
    description: "Optimized international logistics",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Market Analytics",
    description: "Data-driven growth insights",
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-10 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-navy-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-4">
            Full-Service Market Expansion
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Everything you need to successfully launch and scale your brand
            across North American markets
          </p>
        </motion.div>

        {/* Main Capabilities Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${capability.color} opacity-60 mix-blend-multiply`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/60 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-navy-primary shadow-lg">
                  {capability.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-primary mb-3 group-hover:text-accent transition-colors">
                  {capability.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-navy-primary rounded-2xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Additional Services
              </h3>
              <p className="text-gray-400">
                Comprehensive solutions for your brand
              </p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
