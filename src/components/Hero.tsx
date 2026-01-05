import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Boxes } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Global network connections"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-primary/95 via-navy-primary/85 to-navy-primary/70" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/50 via-transparent to-transparent" />
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.08, y: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="absolute bottom-40 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 md:pt-24 pt-32 pb-24 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium">
                US-Mexico Distribution Experts
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Accelerate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300">
                Cross-Border Growth
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Strategic distribution and market expansion that connects your
              brand to millions of consumers across the United States and
              Mexico.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-navy-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-accent/25"
              >
                Start Growing Today
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  2
                </div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-400">Retail Partners</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Operations</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-1 gap-4"
          >
            {/* Global Reach Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Global Market Access
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Seamless entry into US and Mexican markets with established
                    distribution networks and retail partnerships.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Growth Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Accelerated Growth
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Strategic positioning and brand development that drives
                    rapid market penetration and revenue growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Infrastructure Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Boxes className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    End-to-End Infrastructure
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Complete logistics ecosystem including warehousing,
                    fulfillment, and last-mile delivery solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
