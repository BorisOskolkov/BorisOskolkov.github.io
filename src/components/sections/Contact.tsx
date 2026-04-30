import { motion } from "framer-motion";
import { Mail, MapPin, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { CONTENT } from "@/lib/content";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ScholarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/>
  </svg>
);

const c = CONTENT.contact;

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            {c.heading}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl">
            {c.subheading}
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">{c.emailLabel}</h4>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-1">{c.locationLabel}</h4>
                <p className="text-muted-foreground text-lg">
                  {PORTFOLIO_DATA.personal.location}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{c.profilesLabel}</h4>
            <div className="flex gap-3">
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300"
              >
                <LinkedInIcon />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials.scholar}
                target="_blank"
                rel="noreferrer"
                title="Google Scholar"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300"
              >
                <ScholarIcon />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
