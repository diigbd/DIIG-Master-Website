const stats = [
  { value: "$250,000", label: "Impact Fund" },
  { value: ">120", label: "Analysts" },
  { value: ">80", label: "Completed Projects" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display text-center text-foreground mb-12">
          At a Glance
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-display font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wider text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
