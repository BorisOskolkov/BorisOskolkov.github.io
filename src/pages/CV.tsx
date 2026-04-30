import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CV() {
  const pdfUrl = `${import.meta.env.BASE_URL}cv.pdf`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="font-bold text-lg text-foreground hover:text-primary transition-colors"
          >
            Boris Oskolkov
          </a>
          <span className="text-muted-foreground text-sm hidden sm:block">/ CV</span>
        </div>
        <Button asChild size="sm" className="rounded-full gap-2">
          <a href={pdfUrl} download="CV_Boris_Oskolkov.pdf">
            <Download size={16} />
            Download PDF
          </a>
        </Button>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 flex flex-col items-center py-8 px-4 bg-muted/30">
        <div className="w-full max-w-4xl bg-card rounded-2xl border border-border/50 shadow-lg overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
            className="w-full"
            style={{ height: "calc(100vh - 130px)", minHeight: "600px" }}
            title="Boris Oskolkov CV"
          />
        </div>
      </div>
    </div>
  );
}
