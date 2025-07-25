"use client";

import useSWR from "swr";
import { incrementViews } from "./views.action";

export const ViewCount = ({ slug }: { slug: string }) => {
  const viewCount = useSWR(`/viewcount/${slug}`, async () => {
    return incrementViews(slug);
  });

  if (!viewCount.data) {
    return null;
  }
  if (viewCount.error) {
    console.error("Error fetching view count:", viewCount.error);
    return <span className="text-red-500">Erreur de chargement</span>;
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">{viewCount.data.views} vues</span>
    </div>
  );
};
