import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Briefcase, Award } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Comprehensive Training",
    description:
      "Learn about impact investing, financial analysis, and social entrepreneurship through our structured curriculum.",
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description:
      "Connect with industry professionals, alumni, and fellow students passionate about creating positive change.",
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description:
      "Work directly with social enterprises, conducting due diligence, consulting, and portfolio management.",
  },
  {
    icon: Award,
    title: "Leadership Development",
    description:
      "Develop leadership skills through project management, client presentations, and team collaboration.",
  },
];

const Students = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              For Students
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mb-8">
              Join a community of Duke students dedicated to learning about and
              practicing impact investing.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold"
            >
              Apply Now
            </Button>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-center text-foreground mb-4">
              Why Join DIIG?
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              DIIG offers a unique opportunity to gain hands-on experience in
              impact investing while making a real difference in the community.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Timeline */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-center text-foreground mb-12">
              Application Process
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Submit Application",
                    description:
                      "Complete our online application form with your resume and statement of interest.",
                  },
                  {
                    step: "02",
                    title: "Initial Interview",
                    description:
                      "Selected candidates will be invited for a brief behavioral interview.",
                  },
                  {
                    step: "03",
                    title: "Case Study & Final Interview",
                    description:
                      "Demonstrate your analytical skills through a case study. Meet with senior members to discuss your interests and fit.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="flex gap-6 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="text-4xl font-display font-bold text-accent">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Students;
