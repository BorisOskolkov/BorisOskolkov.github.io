import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { CONTENT } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30 border-y border-border/40">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16 text-center">
          {CONTENT.experience.heading}
        </h2>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12 pb-4">
          {PORTFOLIO_DATA.experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm">
                  <Icon size={14} className="text-primary" />
                </div>
                
                {/* Content */}
                <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover-elevate transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {item.role}
                    </h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {item.dates}
                    </span>
                  </div>
                  <h4 className="text-base font-medium text-foreground/80 mb-4">
                    {item.institution}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
