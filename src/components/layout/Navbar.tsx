import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/data";
import { CONTENT } from "@/lib/content";

const NAV_LINKS = CONTENT.nav.links;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_LINKS.map(link => link.name.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#about" 
          className="font-display font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors"
        >
          {PORTFOLIO_DATA.personal.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                activeSection === link.name.toLowerCase()
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.name.toLowerCase() && (
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
          <Button asChild variant="default" className="ml-4 rounded-full">
            <a href="#contact">{CONTENT.nav.cta}</a>
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-base font-medium py-2 border-b border-border/50 ${
                activeSection === link.name.toLowerCase()
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild variant="default" className="mt-2 w-full">
            <a href="#contact" onClick={closeMobileMenu}>{CONTENT.nav.cta}</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
