import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Roster } from "@/components/Roster";
import { PastClients } from "@/components/PastClients";

const Consulting = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Consulting
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              We provide consulting services for socially-minded businesses of
              all sizes. Our teams have worked on cases ranging from market
              research to competitive analyses to customer discovery. We equip
              our clients with capable and trained undergraduate consulting
              teams to help businesses grow and scale. We hope to drive social
              impact and value for our clients and our investments. We aspire to
              set up businesses with capable and trained undergraduate
              consulting teams to help businesses grow and scale, with a major
              goal of generating significant positive social impact.
            </p>
          </div>
        </section>

        <PastClients division="consulting" />

        <Roster division="consulting" />
      </main>
      <Footer />
    </div>
  );
};

export default Consulting;
