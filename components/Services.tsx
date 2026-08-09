"use client";
import { FadeIn } from "./FadeIn";
import { ServiceCard } from "./ServiceCard";
import siteConfig from "@/src/site.config";
import { slugify } from "@/src/site.helpers";

export function Services() {
  const serviceImages = siteConfig.serviceImages ?? {};

  return (
    <section className="py-20 sm:py-28 bg-page">
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
          {(siteConfig.services.length ? siteConfig.services : ["General Contracting"]).map((svc, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <ServiceCard
                title={svc}
                description={`Professional ${svc.toLowerCase()} from a licensed, insured local team. Clear communication, clean work, and dependable follow-through from first call to final walkthrough.`}
                images={serviceImages[svc] ?? []}
                slug={slugify(svc)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
