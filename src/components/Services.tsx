import { GraduationCap, Building2 } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Students",
    subtitle: "A Rare Opportunity",
    description:
      "At DIIG, students will be educated by our team on social impact investing. These students will also have opportunities to gain hands-on experience with consulting for and investing in a business through our state-of-the-art education system, which is fully supported by Duke University's Entrepreneurship and Innovation Department.",
  },
  {
    icon: Building2,
    title: "Businesses",
    subtitle: "Grow Your Business",
    description:
      "DIIG will provide capital, mentorship, and access to a plethora of resources for any business that needs or desires it. Businesses that are a part of our portfolio will have access to capital, top-notch consultants, and mentors at their disposal for help with anything ranging from getting a website up to scaling their business.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display text-center text-foreground mb-4">
          How We Can Help You
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-accent font-medium mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
