export type ServiceMenuItem = { name: string; price: string; duration: string };

export type SiteConfig = {
  businessName: string;
  ownerFirstName: string;
  phone: string;
  email: string;
  towns: string[];
  services: string[];
  yearsInBusiness: string;
  hours: string;
  review1Text: string;
  review1Author: string;
  review2Text: string;
  review2Author: string;
  review3Text: string;
  review3Author: string;
  brandColor: string;
  logoUrl: string;
  businessLocation?: string;
  notes: string;
  images?: Record<string, string>;
  businessType?: string;
  bookingUrl?: string;
  servicesMenu?: ServiceMenuItem[];
  galleryPhotos?: string[];
  pexelsImages?: string[];
  serviceImages?: Record<string, string[]>;
};

export const siteConfig: SiteConfig = {
  businessName: "Rockland Home Services",
  ownerFirstName: "Mike",
  phone: "(845) 555-0198",
  email: "info@rocklandhomeservices.com",
  towns: ["Pearl River", "Nanuet", "Nyack", "Suffern", "New City"],
  services: ["HVAC & Heating", "Plumbing", "Electrical", "Roofing", "General Repairs"],
  yearsInBusiness: "12",
  hours: "Mon-Fri: 7:00 AM-6:00 PM\nSaturday: 8:00 AM-2:00 PM\nSunday: Emergency calls only",
  review1Text: "Mike and his team showed up on time and fixed our heating unit the same day. Honest pricing, no surprises.",
  review1Author: "Tom R.",
  review2Text: "Best plumber in Rockland County. Have used them twice now and will call again without hesitation.",
  review2Author: "Lisa M.",
  review3Text: "Electrical panel replacement done clean and fast. These guys know what they are doing.",
  review3Author: "Dave K.",
  brandColor: "#1a56db",
  logoUrl: "",
  notes: "Licensed and insured contractor serving Rockland County.",
};

export default siteConfig;
