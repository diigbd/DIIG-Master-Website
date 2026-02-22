import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../../data";
import { Roster } from "@/components/Roster";

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Investing
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

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
                Past Clients
              </h2>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-primary rounded-lg text-center">
                <h3 className="text-2xl font-display font-semibold text-primary-foreground mb-4">
                  Interested in Partnering with DIIG?
                </h3>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  We're always looking for mission-driven businesses to support.
                  Reach out to learn more about our process and how we can help.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                    Email
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                    Instagram
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Roster division="investing" />
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
