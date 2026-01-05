import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              About Brandport
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6 leading-tight">
              Powering Brand Growth Across
              <span className="text-accent"> North America</span>
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              We are a cross-border commercial platform specializing in the
              distribution, positioning, and growth of high-quality consumer
              brands across the United States and Mexico. With a strong presence
              in both physical and digital channels, we operate as a strategic
              partner for brands looking to expand their reach.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary mb-1">
                    Market Expansion
                  </h4>
                  <p className="text-sm text-slate">
                    Strategic entry into new markets with local expertise
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary mb-1">
                    Revenue Growth
                  </h4>
                  <p className="text-sm text-slate">
                    Optimized distribution for maximum sales impact
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
            >
              Partner with us
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9]">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
                  alt="Modern warehouse with logistics operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/40 to-transparent" />
              </div>

              {/* Bottom left image */}
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80"
                  alt="Distribution center"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/30 to-transparent" />
              </div>

              {/* Bottom right image */}
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1622030411594-c282a63aa1bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="E-commerce fulfillment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/30 to-transparent" />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-cyan-400 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">B</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy-primary">
                    10+ Years
                  </div>
                  <div className="text-sm text-slate">Market Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
