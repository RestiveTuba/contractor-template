"use client";

import { Thermometer, Droplets, Zap, Home, TreeDeciduous, Wrench } from "lucide-react";
import { config } from "@/src/site.helpers";
import { FadeIn } from "./FadeIn";

const serviceAssets = [
  {
    icon: Thermometer,
    image: "https://placehold.co/600x400/2563eb/ffffff?text=HVAC",
  },
  {
    icon: Droplets,
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Plumbing",
  },
  {
    icon: Zap,
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Electrical",
  },
  {
    icon: Home,
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Roofing",
  },
  {
    icon: TreeDeciduous,
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Landscaping",
  },
  {
    icon: Wrench,
    image: "https://placehold.co/600x400/2563eb/ffffff?text=General+Repairs",
  },
];

const services = (config.services.length ? config.services : ["General Contracting"]).map((title, index) => {
  const asset = serviceAssets[index % serviceAssets.length];
  return {
    ...asset,
    title,
    description: `Professional ${title.toLowerCase()} from a licensed, insured local team. Clear communication, clean work, and dependable follow-through from first call to final walkthrough.`,
  };
});

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
                What We Do
              </p>
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-charcoal leading-none tracking-tight">
                Our Services
              </h2>
            </div>
            <p className="font-body text-warm-gray text-base sm:text-lg max-w-sm leading-relaxed">
              One local team, one phone number.{" "}
              <span className="text-charcoal font-medium">
                Licensed, insured, and easy to reach.
              </span>
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.07}>
              <div className="group relative flex flex-col overflow-hidden border border-warm-border bg-white hover:border-brand transition-all duration-300 hover:shadow-[0_8px_40px_rgba(200,75,17,0.12)] hover:-translate-y-1">
                <div className="relative overflow-hidden h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="absolute bottom-3 right-3 bg-charcoal-deep p-2.5">
                    <svc.icon size={18} strokeWidth={1.75} className="text-brand" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display font-black text-2xl uppercase text-charcoal tracking-wide mb-3">
                    {svc.title}
                  </h3>
                  <p className="font-body text-warm-gray leading-relaxed text-sm flex-1">
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
