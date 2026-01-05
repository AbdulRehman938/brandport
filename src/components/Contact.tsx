import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, Globe, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [state, handleSubmit] = useForm("xwvkwzwv");

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-primary mb-4">
            Let's Discuss Your Growth Strategy
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Ready to expand your brand across North America? Our team is here to
            help you navigate cross-border commerce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-navy-primary rounded-2xl p-8 h-full relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8 relative z-10">
                Reach out to us and let's explore how we can help your brand
                grow.
              </p>

              <div className="space-y-6 mb-8 relative z-10">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail
                      size={20}
                      className="text-accent group-hover:text-white transition-colors"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:adv@brandportdistribution.com"
                      className="text-white hover:text-accent transition-colors font-medium break-all"
                    >
                      adv@brandportdistribution.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Phone
                      size={20}
                      className="text-accent group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href="tel:+17134288164"
                      className="text-white hover:text-accent transition-colors font-medium"
                    >
                      +1 (713) 428-8164
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Globe
                      size={20}
                      className="text-accent group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Website</p>
                    <a
                      href="https://brandportdistribution.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent transition-colors font-medium"
                    >
                      brandportdistribution.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <MapPin
                      size={20}
                      className="text-accent group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Headquarters</p>
                    <p className="text-white font-medium">
                      Houston, TX & Mexico City
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-0 lg:relative lg:top-auto lg:h-32 lg:mt-auto">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {state.succeeded ? (
              <div className="bg-slate-50 border border-gray-200  rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-10 h-10 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-navy-primary mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-charcoal max-w-md">
                  Thank you for reaching out. Our team will review your message
                  and get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 border h-full border-gray-200 rounded-2xl p-8 drop-shadow-md"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6 ">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-navy-primary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy-primary placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-navy-primary mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy-primary placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="Your company"
                    />
                    <ValidationError
                      prefix="Company"
                      field="company"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy-primary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy-primary placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="you@company.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-navy-primary mb-2"
                    >
                      Phone{" "}
                      <span className="text-gray-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy-primary placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-primary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy-primary placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your brand and growth objectives..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full group bg-navy-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy-secondary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-16"
                >
                  {state.submitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
