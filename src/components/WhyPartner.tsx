import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Seamless Cross-Border Operations",
    description:
      "Navigate regulatory complexities with established compliance frameworks",
  },
  {
    title: "Established Retail & Digital Networks",
    description: "Access major retailers and marketplaces from day one",
  },
  {
    title: "Full Supply Chain Visibility",
    description: "Real-time tracking and inventory management across borders",
  },
  {
    title: "Scalable Growth Infrastructure",
    description: "Infrastructure that grows with your brand's success",
  },
  {
    title: "Local Market Expertise",
    description: "Deep understanding of US and Mexican consumer preferences",
  },
];

export default function WhyPartner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
                alt="Modern warehouse logistics operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=80"
                alt="Product distribution"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-8 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-navy-primary">
                    300%
                  </div>
                  <div className="text-xs text-slate">Avg. Growth</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Why Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-6 leading-tight">
              We Don't Just Distribute —
              <span className="text-accent"> We Build Market Presence</span>
            </h2>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              Partner with a team that understands the complexities of
              cross-border commerce and has the infrastructure to deliver
              results.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl py-2 hover:bg-slate-100 transition-colors group"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                    <Check
                      size={16}
                      className="text-accent group-hover:text-white"
                    />
                  </span>
                  <div>
                    <span className="font-semibold text-navy-primary block mb-1">
                      {benefit.title}
                    </span>
                    <span className="text-sm text-slate">
                      {benefit.description}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="inline-flex items-center gap-2 bg-navy-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy-secondary transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Become a Partner
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
