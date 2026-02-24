import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Roster } from "@/components/Roster";
import { PastClients } from "@/components/PastClients";

const Data = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Data
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              The Data team empowers clients to achieve their maximum potential
              by providing data-driven solutions to their business questions.
              Our team comprises of data analysts from diverse backgrounds who
              are equipped to tackle real-life data challenges and drive
              results.{" "}
            </p>
          </div>
        </section>

        <PastClients division="data" />

        <Roster division="data" />
      </main>
      <Footer />
    </div>
  );
};

export default Data;
