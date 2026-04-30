import { motion } from "framer-motion";
import { Mail, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA } from "@/lib/data";
import { CONTENT } from "@/lib/content";

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-medium tracking-wide mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-primary inline-block"></span>
                {PORTFOLIO_DATA.personal.title}
              </h2>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 text-balance">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {PORTFOLIO_DATA.personal.bio}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-10 text-sm text-muted-foreground font-medium">
                <a href="https://maps.google.com/?q=Stillwater,OK" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-colors">
                  <MapPin size={16} className="text-primary" />
                  {PORTFOLIO_DATA.personal.location}
                </a>
                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary" />
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20" asChild>
                  <a href={CONTENT.hero.primaryButtonHref}>{CONTENT.hero.primaryButton}</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <a href={CONTENT.hero.secondaryButtonHref}>
                    <FileText size={18} className="mr-2" />
                    {CONTENT.hero.secondaryButton}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-border/50 bg-card shadow-2xl overflow-hidden p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  <img 
                    src={PORTFOLIO_DATA.personal.avatarUrl} 
                    alt={PORTFOLIO_DATA.personal.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
