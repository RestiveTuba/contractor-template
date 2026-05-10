"use client";

import { Thermometer, Droplets, Zap, Home, TreeDeciduous, Wrench } from "lucide-react";
import { FadeIn } from "./FadeIn";

/*
  REPLACE: Add or remove services as needed.
  Each service has: icon, title, description, image keywords for Unsplash.
*/
const services = [
  {
    icon: Thermometer,
    /* REPLACE: Service 1 Title */
    title: "Heating & Cooling",
    /* REPLACE: Service 1 Description */
    description:
      "Full HVAC installation, repair, and seasonal tune-ups. We keep your family comfortable year-round — fast diagnosis, honest pricing.",
    /* REPLACE: Swap keywords to match service */
    /* REPLACE: Swap photo ID — find at unsplash.com */
    image: "https://images.unsplash.com/photo-1621347085688-beacba5c2b6c?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Droplets,
    /* REPLACE: Service 2 Title */
    title: "Plumbing & Drain",
    /* REPLACE: Service 2 Description */
    description:
      "From leaky faucets to full repiping. Emergency drain clearing, water heater replacement, and bathroom renovations done right.",
    /* REPLACE: Swap photo ID — find at unsplash.com */
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Zap,
    /* REPLACE: Service 3 Title */
    title: "Electrical Work",
    /* REPLACE: Service 3 Description */
    description:
      "Panel upgrades, outlet installation, and whole-home rewiring. Licensed electricians who follow code — no shortcuts, no surprises.",
    /* REPLACE: Swap photo ID — find at unsplash.com */
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Home,
    /* REPLACE: Service 4 Title */
    title: "Roofing & Gutters",
    /* REPLACE: Service 4 Description */
    description:
      "Roof replacement, storm damage repair, and gutter installation. We back every job with a 10-year workmanship warranty.",
    /* REPLACE: Swap photo ID — find at unsplash.com */
    image: "https://images.unsplash.com/photo-1632923057155-b6cf3b1da37c?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: TreeDeciduous,
    /* REPLACE: Service 5 Title */
    title: "Landscaping",
    /* REPLACE: Service 5 Description */
    description:
      "Lawn maintenance, seasonal cleanups, and full landscape design. Your yard will be the one neighbors ask about.",
    /* REPLACE: Swap photo ID — find at unsplash.com */
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    icon: Wrench,
    /* REPLACE: Service 6 Title */
    title: "General Repairs",
    /* REPLACE: Service 6 Description */
    description:
      "One call for everything else — carpentry, drywall, painting, and home maintenance. Your to-do list, handled.",
    /* REPLACE: Swap photo ID — find at unsplash.com */
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&h=400&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
                What We Do
              </p>
              {/* REPLACE: Services section heading */}
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-charcoal leading-none tracking-tight">
                Our Services
              </h2>
            </div>
            <p className="font-body text-warm-gray text-base sm:text-lg max-w-sm leading-relaxed">
              {/* REPLACE: Services section subheading */}
              Every trade, one phone number.{" "}
              <span className="text-charcoal font-medium">
                Licensed, insured, and background-checked.
              </span>
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="group relative flex flex-col overflow-hidden border border-warm-border bg-white hover:border-brand transition-all duration-300 hover:shadow-[0_8px_40px_rgba(200,75,17,0.12)] hover:-translate-y-1">
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  {/* REPLACE: Use next/image in production for optimization */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Brand color top bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Icon badge */}
                  <div className="absolute bottom-3 right-3 bg-charcoal-deep p-2.5">
                    <svc.icon size={18} strokeWidth={1.75} className="text-brand" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display font-black text-2xl uppercase text-charcoal tracking-wide mb-3">
                    {/* REPLACE: Service Title */}
                    {svc.title}
                  </h3>
                  <p className="font-body text-warm-gray leading-relaxed text-sm flex-1">
                    {/* REPLACE: Service Description */}
                    {svc.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand hover:text-brand-dark transition-colors group/link"
                  >
                    Get a quote
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
