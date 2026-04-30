import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/lib/data";
import { CONTENT } from "@/lib/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center md:text-left">
            {CONTENT.skills.heading}
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PORTFOLIO_DATA.skills.map((skillGroup) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div key={skillGroup.category} variants={itemVariants}>
                <Card className="h-full border-border/50 shadow-sm bg-card/50 hover:bg-card transition-colors">
                  <CardHeader className="pb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg font-display">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {skillGroup.items.map((item) => (
                        <li key={item} className="flex items-start text-sm text-muted-foreground">
                          <span className="mr-2.5 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
