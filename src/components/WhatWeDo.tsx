import { DollarSign, Users, Lightbulb, TrendingUp } from "lucide-react";

const offerings = [
  {
    icon: DollarSign,
    title: "Providing Capital",
    description: "Empowering Impact",
    detail: "We provide seed funding to mission-driven startups and social enterprises.",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert Guidance",
    detail: "Our analysts provide strategic consulting to help businesses scale their impact.",
  },
  {
    icon: Lightbulb,
    title: "Mentorship",
    description: "Knowledge Transfer",
    detail: "Connect with experienced mentors from Duke's entrepreneurship ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Growth Support",
    description: "Scaling Success",
    detail: "Access to resources, networks, and expertise to accelerate your growth.",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display text-center text-primary-foreground mb-16">
          What We Do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="text-center group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto bg-primary-foreground/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-gold text-sm font-medium mb-3">
                {item.description}
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
