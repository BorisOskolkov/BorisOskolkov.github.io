import { PORTFOLIO_DATA } from "@/lib/data";
import { CONTENT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/40 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-lg text-foreground">
            {PORTFOLIO_DATA.personal.name}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {PORTFOLIO_DATA.personal.title}
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          {CONTENT.footer.links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          {CONTENT.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
