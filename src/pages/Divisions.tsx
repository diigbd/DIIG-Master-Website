import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BarChart3, FileText, Coins, Search, TrendingUp } from "lucide-react";

const divisions = [
  {
    icon: BarChart3,
    name: "Data",
    description:
      "The Data Division leverages data science, machine learning, and advanced analytics to derive insights and build data-driven solutions for impact-focused organizations.",
    focus: ["Data Analysis", "Machine Learning", "Predictive Modeling"],
  },
  {
    icon: FileText,
    name: "Consulting",
    description:
      "The Consulting Division provides pro-bono strategic consulting to social enterprises, helping them scale their operations and impact.",
    focus: ["Market Research", "Financial Modeling", "Strategy Development"],
  },
  {
    icon: Coins,
    name: "Investment",
    description:
      "Our Investment Division manages DIIG's impact fund, conducting due diligence and making investment decisions for mission-driven startups.",
    focus: ["Due Diligence", "Portfolio Management", "Deal Sourcing"],
  },
  {
    icon: Search,
    name: "Education",
    description:
      "Our Education Division develops curriculum and training programs to teach students about impact investing and social entrepreneurship.",
    focus: ["Training Programs", "Speaker Series", "Workshops"],
  },
  {
    icon: TrendingUp,
    name: "Business Development",
    description:
      "The Business Development Division builds partnerships and relationships with organizations, alumni, and industry leaders to expand DIIG's impact.",
    focus: ["Partnership Building", "Alumni Relations", "Event Coordination"],
  },
];

const Divisions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Divisions
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              DIIG is organized into specialized divisions, each focused on a
              unique aspect of impact investing and social entrepreneurship.
            </p>
          </div>
        </section>

        {/* Divisions Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {divisions.map((division, index) => (
                <div
                  key={division.name}
                  className="bg-card border border-border p-8 rounded-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <division.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {division.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {division.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {division.focus.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Divisions;
