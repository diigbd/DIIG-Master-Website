import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Roster } from "@/components/Roster";

const BD = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Business Development
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              The Business Development (BD) Team is responsible for both the
              external branding of DIIG and the internal synergy within the
              organization. In addition to managing client-outreach and planning
              the annual DIIG Spring Case Competition, the division focuses on
              online engagement strategies including social media and research
              blog posts to promote DIIG's services. Beyond external-facing
              functions, BD is also responsible for organizational events, such
              as General Body Meetings (GBMs) and professional initiatives.{" "}
            </p>
          </div>
        </section>

        <Roster division="bd" />
      </main>
      <Footer />
    </div>
  );
};

export default BD;
