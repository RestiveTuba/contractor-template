import { Phone } from "lucide-react";
import { brandNameParts, config, phoneHref, yearsLabel } from "@/src/site.helpers";

export function Footer() {
  const year = new Date().getFullYear();
  const name = brandNameParts();

  return (
    <footer className="bg-charcoal-deep text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="font-display font-black text-2xl uppercase text-white tracking-wide leading-none mb-2">
              <span className="text-brand">{name.first}</span>
              {name.rest && <> {name.rest}</>}
            </div>
            <p className="font-body italic text-sm text-white/40 max-w-xs">
              Doing it right with {yearsLabel().toLowerCase()} in business.
            </p>
          </div>

          {/* Phone */}
          <a
            href={phoneHref()}
            className="flex items-center gap-2 text-brand hover:text-brand-light transition-colors"
            aria-label="Call us"
          >
            <Phone size={16} strokeWidth={2.5} />
            <span className="font-display font-bold text-xl tracking-wide">
              {config.phone}
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-body">
          <p>
            &copy; {year} {config.businessName} · All rights reserved
          </p>
          <p className="text-white/30">
            Licensed Contractor · Fully Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
