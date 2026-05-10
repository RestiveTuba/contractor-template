import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Reviews } from "@/components/Reviews";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
