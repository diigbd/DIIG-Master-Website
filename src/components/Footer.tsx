import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/diig-logo.png"
                alt="DIIG Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              Duke Impact Investing Group connects Duke students with
              mission-driven businesses, providing capital, consulting, and
              mentorship to create lasting positive change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Divisions", "Clients", "Students", "Team", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:diigbd@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                <Mail size={16} />
                diigbd@gmail.com
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <MapPin size={16} />
                Durham, NC
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/diig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/dukeimpactinvesting/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Duke Impact Investing Group. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
