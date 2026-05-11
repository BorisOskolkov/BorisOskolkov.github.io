import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CitationBadge } from "@/components/CitationBadge";
import { PORTFOLIO_DATA } from "@/lib/data";
import { CONTENT } from "@/lib/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {CONTENT.projects.heading}
          </h2>
          <p className="text-muted-foreground text-lg">{CONTENT.projects.subheading}</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
          {PORTFOLIO_DATA.projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <div className="group flex gap-6 bg-card border border-border/50 rounded-2xl px-6 py-5 hover:border-primary/30 hover:shadow-md shadow-sm transition-all duration-300">
                {/* Year */}
                <div className="shrink-0 pt-0.5">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {/* Link icons */}
                    <div className="flex gap-2 shrink-0 text-muted-foreground">
                      {project.links.paper && (
                        <a
                          href={project.links.paper}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-primary transition-colors"
                          title="Read Paper"
                        >
                          <FileText size={17} />
                        </a>
                      )}
                      {project.links.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-primary transition-colors"
                          title="Source Code"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-primary transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-normal text-xs bg-secondary/60 hover:bg-secondary text-secondary-foreground border-transparent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <CitationBadge />
          <a
            href={CONTENT.projects.scholarHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            {CONTENT.projects.scholarLink}
            <ArrowUpRight
              size={16}
              className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
