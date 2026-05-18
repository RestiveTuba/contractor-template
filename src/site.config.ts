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
  getformId?: string;
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
  reviews: [
    { name: "Tom R.", text: "Mike and his team showed up on time and fixed our heating unit the same day. Honest pricing, no surprises." },
    { name: "Lisa M.", text: "Best plumber in Rockland County. Have used them twice now and will call again without hesitation." },
    { name: "Dave K.", text: "Electrical panel replacement done clean and fast. These guys know what they are doing." },
  ],
  brandColor: "#1a56db",
  logoUrl: "",
  notes: "Licensed and insured contractor serving Rockland County.",
  getformId: "ybivc3204fx",
};

export default siteConfig;
