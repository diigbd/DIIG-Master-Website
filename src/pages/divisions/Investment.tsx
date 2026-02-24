import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Roster } from "@/components/Roster";

const Investment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Investment
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              The Investment division manages Duke's first and only impact VC
              fund. We manage $250K, the largest sum ever entrusted to a student
              group by Duke University. We source social impact startups to
              invest in and conduct due diligence on deals that fit our
              investment criteria in the sectors of education and health,
              fintech, consumer products, energy and environment.{" "}
            </p>
          </div>
        </section>

        <Roster division="investment" />
      </main>
      <Footer />
    </div>
  );
};

export default Investment;
