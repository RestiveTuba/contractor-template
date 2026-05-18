export type SiteReview = {
  name: string;
  text: string;
};

export type SiteConfig = {
  businessName: string;
  ownerFirstName: string;
  phone: string;
  email: string;
  towns: string[];
  services: string[];
  yearsInBusiness: string;
  hours: string;
  reviews: SiteReview[];
  brandColor: string;
  logoUrl: string;
  notes: string;
};

export const siteConfig: SiteConfig = {
  businessName: "Meridian Home Services",
  ownerFirstName: "Alex",
  phone: "(845) 555-0147",
  email: "hello@meridianhomeservices.com",
  towns: [
    "Rockland County",
    "Pearl River",
    "Nanuet",
    "Nyack",
    "Suffern",
    "New City",
    "Spring Valley",
    "Haverstraw",
  ],
  services: [
    "Heating & Cooling",
    "Plumbing & Drain",
    "Electrical Work",
    "Roofing & Gutters",
    "Landscaping",
    "General Repairs",
  ],
  yearsInBusiness: "30+",
  hours: "Mon-Fri: 7:00 AM-6:00 PM\nSaturday: 8:00 AM-2:00 PM\nSunday: Emergency calls only",
  reviews: [
    {
      name: "Linda M.",
      text: "They came out the same afternoon my furnace died. The tech explained everything before he touched it, and the price was exactly what he quoted. I've been burned by other contractors - not these guys.",
    },
    {
      name: "Robert T.",
      text: "Third time using them. First time for the AC, second for the water heater, now the panel upgrade. Every time: on time, no mess, no nickel-and-diming. It's nice to have a contractor you just trust.",
    },
    {
      name: "Karen S.",
      text: "I called four contractors. Three gave me runaround on timing. Meridian came the next morning, diagnosed the problem in 20 minutes, and had parts on the truck. Done before lunch. Highly recommend.",
    },
  ],
  brandColor: "#C84B11",
  logoUrl: "",
  notes: "Licensed and insured contractor serving Rockland County since 1994.",
};

export default siteConfig;
