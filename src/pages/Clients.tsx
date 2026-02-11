import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../data";

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Clients
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              We partner with mission-driven organizations to create lasting
              social and environmental impact.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
                Our Process for Businesses
              </h2>

              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="connection"
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-2xl font-display font-semibold text-foreground hover:text-primary">
                    Connection
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg pt-4">
                    We begin by understanding your business, mission, and goals.
                    Through initial consultations, we identify how DIIG can best
                    support your growth and impact objectives.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="due-diligence"
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-2xl font-display font-semibold text-foreground hover:text-primary">
                    Due Diligence
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg pt-4">
                    Our team conducts comprehensive analysis of your business
                    model, market opportunity, financials, and social impact
                    metrics to ensure alignment with our investment criteria.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="investment"
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-2xl font-display font-semibold text-foreground hover:text-primary">
                    Investment
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg pt-4">
                    We aim to inject capital, mentorship, and resources to grow
                    your business. Beyond funding, we provide ongoing strategic
                    support and access to our network of industry experts and
                    partners.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

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
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
