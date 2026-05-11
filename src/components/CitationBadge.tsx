import { useQuery } from "@tanstack/react-query";
import { Quote } from "lucide-react";

type ScholarData = {
  citations: number | null;
  updatedAt: string | null;
  source: string;
};

function formatRelative(iso: string | null): string {
  if (!iso) return "";
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const diff = Date.now() - then;
  if (diff < 0) return "just now";
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export function CitationBadge() {
  const { data, isLoading, isError } = useQuery<ScholarData>({
    queryKey: ["scholar-citations"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.BASE_URL}scholar.json`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return (await res.json()) as ScholarData;
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 1,
  });

  // Hide the badge entirely if we can't show a real number — avoids surfacing
  // any error UI to visitors when the workflow has not yet populated the file.
  if (isLoading || isError) return null;
  if (!data || data.citations == null) return null;

  const updated = formatRelative(data.updatedAt);

  return (
    <a
      href={data.source}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary/15 border border-primary/15 text-sm font-medium text-primary transition-colors"
      title={
        data.updatedAt
          ? `Last refreshed ${new Date(data.updatedAt).toLocaleString()}`
          : "Live count from Google Scholar"
      }
    >
      <Quote size={14} className="opacity-80" />
      <span>
        Cited{" "}
        <span className="font-semibold tabular-nums">
          {data.citations.toLocaleString()}
        </span>{" "}
        times on Google Scholar
      </span>
      {updated && (
        <span className="text-xs text-primary/60 ml-1">· {updated}</span>
      )}
    </a>
  );
}
