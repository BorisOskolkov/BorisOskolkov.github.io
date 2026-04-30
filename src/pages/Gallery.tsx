import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Image as ImageIcon, Presentation, X, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GALLERY_ITEMS, type GalleryItem } from "@/lib/data";

type Filter = "all" | "project" | "presentation";

const FILTERS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Projects", value: "project" },
  { label: "Presentations", value: "presentation" },
];

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-muted">
            {item.category === "presentation" ? (
              <Presentation size={40} className="text-primary/30" />
            ) : (
              <ImageIcon size={40} className="text-primary/30" />
            )}
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge
            variant={item.category === "presentation" ? "secondary" : "default"}
            className="text-xs capitalize"
          >
            {item.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-foreground leading-snug group-hover:text-primary transition-colors mb-1">
          {item.title}
        </h3>

        {item.date && (
          <p className="text-xs text-muted-foreground mb-3">{item.date}</p>
        )}

        {item.description && (
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
            {item.description}
          </p>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ItemModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card border border-border/50 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Image */}
          {item.imageUrl ? (
            <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full aspect-video rounded-t-3xl bg-gradient-to-br from-primary/10 to-muted flex items-center justify-center">
              {item.category === "presentation" ? (
                <Presentation size={56} className="text-primary/30" />
              ) : (
                <ImageIcon size={56} className="text-primary/30" />
              )}
            </div>
          )}

          {/* Body */}
          <div className="p-7 md:p-9">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <Badge
                  variant={item.category === "presentation" ? "secondary" : "default"}
                  className="text-xs capitalize mb-3"
                >
                  {item.category}
                </Badge>
                <h2 className="font-display text-2xl font-bold text-foreground leading-snug">
                  {item.title}
                </h2>
                {item.date && (
                  <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-muted/70 text-muted-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {item.description && (
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>
            )}

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  title="View paper"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
                >
                  <FileText size={16} />
                </a>
              )}
              <Button variant="outline" size="sm" className="rounded-full" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-3 flex items-center gap-4">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </a>
        <span className="text-border/70">|</span>
        <span className="font-bold text-foreground">Gallery</span>
      </div>

      <div className="flex-1 max-w-6xl mx-auto w-full px-6 md:px-12 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Projects & Presentations
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A visual archive of my research projects, conference presentations, and academic work.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f.value
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
              <span className="ml-1.5 text-xs opacity-60">
                {f.value === "all"
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((i) => i.category === f.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-muted-foreground">
            No items yet — add them to <code className="text-xs bg-muted px-1.5 py-0.5 rounded">src/lib/data.ts</code>.
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <GalleryCard key={item.id} item={item} onClick={() => setSelected(item)} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
