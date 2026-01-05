import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, ShoppingBag, Truck } from "lucide-react";

const markets = [
  {
    country: "United States",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    description:
      "Comprehensive distribution network with strategically located warehouses, established retail partnerships, and robust e-commerce fulfillment capabilities.",
    stats: [
      { label: "Major Cities", value: "50+" },
      { label: "Retail Partners", value: "300+" },
    ],
    features: ["Major retail chains", "Amazon FBA", "DTC fulfillment"],
  },
  {
    country: "Mexico",
    flag: "🇲🇽",
    image:
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80",
    description:
      "Deep market expertise with local infrastructure, strong retailer relationships, and understanding of consumer dynamics across major metropolitan areas.",
    stats: [
      { label: "Distribution Centers", value: "5" },
      { label: "Retail Partners", value: "200+" },
    ],
    features: ["Liverpool & Palacio", "Mercado Libre", "Regional chains"],
  },
];

export default function GeographicCoverage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-navy-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* World Map Pattern (subtle) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Market Coverage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Operating Across Two Dynamic Markets
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Strategic presence in North America's largest consumer markets with
            established infrastructure and partnerships
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={market.country}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={market.image}
                  alt={`${market.country} market`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary via-navy-primary/50 to-transparent" />

                {/* Country Badge */}
                <div className="absolute top-5 left-5 flex items-center gap-3 bg-white/10 backdrop-blur-md pl-2 pr-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-lg shadow-inner">
                    {market.flag}
                  </span>
                  <span className="font-medium text-white tracking-wide text-sm uppercase">
                    {market.country}
                  </span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                  {market.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10"
                    >
                      <div className="text-xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {market.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {market.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 text-sm text-accent bg-accent/10 px-3 py-1 rounded-full"
                    >
                      <MapPin size={12} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Building2 size={20} className="text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">6+</div>
                <div className="text-sm">Warehouses</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <ShoppingBag size={20} className="text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">500+</div>
                <div className="text-sm">Retail Partners</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Truck size={20} className="text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">48h</div>
                <div className="text-sm">Avg. Delivery</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
