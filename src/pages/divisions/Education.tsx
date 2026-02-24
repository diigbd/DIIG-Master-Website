import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Roster } from "@/components/Roster";

const Education = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Education
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              The education division aims to promote knowledge of and interest
              in impact investing within the Duke community. Each semester, we
              teach a half-credit course designed as an introduction to the
              impact investing industry as well as organize DIIG's Impact
              Fellowship program for new analysts. We instruct students on best
              methods of quantifying financial and social impact, guide them
              through case studies, and invite guest speakers from the
              industry.{" "}
            </p>
          </div>
        </section>

        <Roster division="education" />
      </main>
      <Footer />
    </div>
  );
};

export default Education;
