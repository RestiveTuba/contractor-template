"use client";

import { useState } from "react";
import { Phone, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  address: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

/*
  REPLACE: Update service options with your actual offerings
*/
const serviceOptions = [
  "Heating & Cooling (HVAC)",
  "Plumbing & Drain",
  "Electrical",
  "Roofing & Gutters",
  "Landscaping",
  "General Home Repair",
  "Other / Not Sure",
];

/*
  REPLACE: Update hours, service areas, and contact info below
*/

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.phone.trim()) errors.phone = "Please enter your phone number.";
  else if (!/^[\d\s\-\(\)\+]{7,}$/.test(form.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (!form.service) errors.service = "Please select a service.";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // REPLACE: Wire up to your form backend (Formspree, Resend, etc.)
    await new Promise((res) => setTimeout(res, 900));
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn>
          <div className="mb-14">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand font-medium mb-3">
              Get In Touch
            </p>
            {/* REPLACE: Contact section heading */}
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-charcoal leading-none tracking-tight">
              Free Estimate.<br />
              <span className="text-brand">No Obligation.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">

          {/* Left: Contact info */}
          <FadeIn direction="left">
            <div>
              {/* Big phone */}
              <a
                href="tel:+18455550147" /* REPLACE: Phone Number */
                className="group block mb-8"
              >
                <span className="font-body text-xs uppercase tracking-widest text-warm-gray">
                  Call Anytime
                </span>
                <div className="flex items-center gap-2 mt-1 group-hover:text-brand-dark transition-colors">
                  <Phone size={22} strokeWidth={2} className="text-brand shrink-0 mt-1" />
                  {/* REPLACE: Phone Number */}
                  <span className="font-display font-black text-4xl sm:text-5xl text-brand leading-none tracking-tight">
                    (845) 555-0147
                  </span>
                </div>
              </a>

              <div className="space-y-6 border-t border-warm-border pt-8">
                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock size={18} strokeWidth={1.75} className="text-brand mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display font-bold text-sm uppercase tracking-wide text-charcoal mb-1">
                      Business Hours
                    </div>
                    <div className="font-body text-warm-gray text-sm leading-relaxed space-y-0.5">
                      {/* REPLACE: Business Hours */}
                      <div>Mon – Fri: 7:00 AM – 6:00 PM</div>
                      <div>Saturday: 8:00 AM – 2:00 PM</div>
                      <div>Sunday: Emergency calls only</div>
                    </div>
                  </div>
                </div>

                {/* Service area */}
                <div className="flex items-start gap-4">
                  <MapPin size={18} strokeWidth={1.75} className="text-brand mt-0.5 shrink-0" />
                  <div>
                    <div className="font-display font-bold text-sm uppercase tracking-wide text-charcoal mb-1">
                      Service Area
                    </div>
                    <div className="font-body text-warm-gray text-sm leading-relaxed">
                      {/* REPLACE: Service Area cities/counties */}
                      Rockland County · Pearl River · Nanuet · Nyack ·
                      Suffern · New City · Spring Valley · Haverstraw
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right">
            {submitted ? (
              <div className="bg-white border border-warm-border p-10 flex flex-col items-center text-center gap-4">
                <CheckCircle2 size={44} strokeWidth={1.5} className="text-brand" />
                <h3 className="font-display font-black text-3xl uppercase text-charcoal">
                  We&apos;ll Be In Touch
                </h3>
                <p className="font-body text-warm-gray max-w-sm">
                  {/* REPLACE: Confirmation message */}
                  Thanks — we typically follow up within 2 hours during business hours.
                  For urgent issues, call us directly.
                </p>
                <a
                  href="tel:+18455550147" /* REPLACE: Phone Number */
                  className="mt-2 inline-flex items-center gap-2 text-brand font-display font-bold uppercase tracking-wide"
                >
                  <Phone size={16} strokeWidth={2.5} />
                  {/* REPLACE: Phone Number */}
                  (845) 555-0147
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-warm-border p-8 sm:p-10 space-y-5"
              >
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-display font-bold text-xs uppercase tracking-widest text-charcoal mb-2"
                    >
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Jane Smith"
                      className={cn(
                        "font-body h-11 border-warm-border focus-visible:ring-brand/30 focus-visible:border-brand",
                        errors.name && "border-red-400"
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 font-body">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-display font-bold text-xs uppercase tracking-widest text-charcoal mb-2"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="(845) 555-0000"
                      className={cn(
                        "font-body h-11 border-warm-border focus-visible:ring-brand/30 focus-visible:border-brand",
                        errors.phone && "border-red-400"
                      )}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 font-body">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block font-display font-bold text-xs uppercase tracking-widest text-charcoal mb-2"
                  >
                    Property Address
                  </label>
                  <Input
                    id="address"
                    value={form.address}
                    onChange={set("address")}
                    placeholder="123 Main St, Pearl River, NY"
                    className="font-body h-11 border-warm-border focus-visible:ring-brand/30 focus-visible:border-brand"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block font-display font-bold text-xs uppercase tracking-widest text-charcoal mb-2"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={set("service")}
                    className={cn(
                      "w-full h-11 px-3 font-body text-sm border rounded-md bg-white text-charcoal",
                      "focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand",
                      "border-warm-border transition-colors",
                      !form.service && "text-warm-gray",
                      errors.service && "border-red-400"
                    )}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {/* REPLACE: Service options */}
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-500 font-body">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-display font-bold text-xs uppercase tracking-widest text-charcoal mb-2"
                  >
                    Tell Us More{" "}
                    <span className="normal-case font-body font-normal text-warm-gray">
                      (optional)
                    </span>
                  </label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={set("message")}
                    placeholder="What's going on? Best time to call? Any other details…"
                    rows={4}
                    className="font-body border-warm-border focus-visible:ring-brand/30 focus-visible:border-brand resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={cn(
                    "w-full bg-brand text-white font-display font-black uppercase tracking-wider",
                    "text-lg py-4 transition-all duration-200",
                    "hover:bg-brand-dark active:translate-y-px",
                    submitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {submitting ? "Sending…" : "Send My Request →"}
                </button>

                <p className="font-body text-xs text-warm-gray text-center">
                  We respect your privacy. Your info is never sold or shared.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
