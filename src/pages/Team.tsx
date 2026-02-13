import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Linkedin } from "lucide-react";

import { leadership } from "@/data";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const { partners, directors } = leadership;

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

        {/* Partners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-center text-foreground mb-12">
              Partners
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {partners.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage
                      src={`/team/${member.name.split(" ")[0]}.jpeg`}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-2xl font-display font-bold bg-primary text-primary-foreground">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-sm">
                    {member.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directors */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display text-center text-foreground mb-12">
              Directors
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {directors.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <Avatar className="w-16 h-16 mx-auto mb-3">
                    <AvatarImage
                      src={`/team/${member.name.split(" ")[0]}.jpeg`}
                      alt={member.name}
                    />
                    <AvatarFallback className="text-lg font-display font-bold bg-primary text-primary-foreground">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
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
