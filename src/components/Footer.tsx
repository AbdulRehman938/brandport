import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Distribution & Logistics",
  "Brand Development",
  "E-Commerce Integration",
  "Market Analytics",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/Logo.png"
              alt="Brandport Distribution"
              className="h-16 w-auto mb-6 bg-white rounded-lg p-2"
              loading="lazy"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cross-border commercial platform specializing in distribution,
              positioning, and growth of consumer brands across the US-Mexico
              corridor.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links and Services Row */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 md:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 md:mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 text-sm inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 md:mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:adv@brandportdistribution.com"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0 mt-0.5">
                  <Mail size={14} className="text-accent" />
                </div>
                <span className="break-words leading-relaxed">
                  adv@brandportdistribution.com
                </span>
              </a>
              <a
                href="tel:+17134288164"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Phone size={14} className="text-accent" />
                </div>
                +1 (713) 428-8164
              </a>
            </div>

            {/* Newsletter (optional CTA) */}
            <div className="mt-6 md:mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-gray-300 mb-3">
                Ready to expand your brand?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm text-accent hover:text-white transition-colors font-medium"
              >
                Get in touch today
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Brandport Distribution. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a
                href="mailto:adv@brandportdistribution.com?subject=Privacy%20Policy%20Inquiry"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="mailto:adv@brandportdistribution.com?subject=Terms%20of%20Service%20Inquiry"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
