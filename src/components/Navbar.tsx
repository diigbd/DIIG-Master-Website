import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Linkedin, Instagram } from "lucide-react";
import { socialLinks } from "../data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Divisions", href: "/divisions" },
  { name: "Clients", href: "/clients" },
  { name: "Students", href: "/students" },
  { name: "Team", href: "/team" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="../diig-logo.png"
              alt="DIIG Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link text-foreground hover:text-accent ${
                  location.pathname === link.href ? "active text-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-medium uppercase tracking-wide ${
                  location.pathname === link.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 mt-4 border-t border-border">
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-foreground hover:text-accent"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
