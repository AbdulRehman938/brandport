export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CapabilityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PartnerBenefit {
  text: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}
