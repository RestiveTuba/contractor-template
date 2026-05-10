import type { Metadata } from "next";
import { Big_Shoulders, Lora } from "next/font/google";
import "./globals.css";

/*
  TYPOGRAPHY
  Display: Big Shoulders Display — ultra-condensed American industrial.
           Stamped-metal authority at large sizes.
  Body:    Lora — warm humanist serif. Editorial, readable, trustworthy.
*/
const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  /* REPLACE: Business Name */
  title: "Meridian Home Services | Licensed Contractor",
  /* REPLACE: Business Description */
  description:
    "Licensed and insured contractor serving Rockland County since 1994. HVAC, plumbing, electrical, and roofing. Call for a free estimate.",
  /* REPLACE: Business Phone */
  other: { "format-detection": "telephone=yes" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
