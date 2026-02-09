import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Testimonial } from "@/components/Testimonial";
import { Services } from "@/components/Services";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Stats />
        <Testimonial />
        <Services />
        <WhatWeDo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
