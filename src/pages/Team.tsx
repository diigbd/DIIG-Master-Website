import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Linkedin } from "lucide-react";

const leadership = [
  { name: "Divyansh Jain", role: "Partner", year: "Class of 2026" },
  { name: "Sreya Gnanavel", role: "Partner", year: "Class of 2026" },
  { name: "Danielle Park", role: "Partner", year: "Class of 2027" },
];

const team = [
  { name: "Arjun Mandhare", role: "Director", division: "Investment" },
  { name: "Andy Li", role: "Director", division: "Consulting" },
  { name: "Greg Sexton", role: "Director", division: "Investment" },
  { name: "Gabriela Nicolaievsky", role: "Director", division: "Consulting" },
  { name: "Alayna Binder", role: "Director", division: "Data" },
  { name: "Raiyan Choudhary", role: "Director", division: "Education" },
  { name: "Amy Liu", role: "Director", division: "Data" },
  { name: "Ella Veysel", role: "Director", division: "Business Development" },
  {
    name: "Sami Moudarres",
    role: "Director",
    division: "Business Development",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Our Team
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Meet the dedicated Duke students driving DIIG's mission to create
              positive impact through investing.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-center text-foreground mb-12">
              Leadership Team
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {leadership.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center text-3xl font-display font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {member.year}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-center text-foreground mb-12">
              Team Members
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center text-lg font-display font-bold text-primary-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                  <span className="inline-block mt-2 text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                    {member.division}
                  </span>
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

export default Team;
