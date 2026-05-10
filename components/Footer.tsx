import { Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-deep text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="font-display font-black text-2xl uppercase text-white tracking-wide leading-none mb-2">
              {/* REPLACE: Business Name */}
              <span className="text-brand">Meridian</span> Home Services
            </div>
            <p className="font-body italic text-sm text-white/40 max-w-xs">
              {/* REPLACE: Footer tagline */}
              Doing it right the first time since 1994.
            </p>
          </div>

          {/* Phone */}
          <a
            href="tel:+18455550147" /* REPLACE: Phone Number */
            className="flex items-center gap-2 text-brand hover:text-brand-light transition-colors"
            aria-label="Call us"
          >
            <Phone size={16} strokeWidth={2.5} />
            {/* REPLACE: Phone Number */}
            <span className="font-display font-bold text-xl tracking-wide">
              (845) 555-0147
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-body">
          <p>
            {/* REPLACE: Business Name, State License Number */}
            &copy; {year} Meridian Home Services LLC · All rights reserved
          </p>
          <p className="text-white/30">
            {/* REPLACE: State, License number */}
            NY Licensed Contractor · ROC-12345 · Fully Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
