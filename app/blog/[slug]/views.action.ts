"use server";

import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
export const incrementViews = async (
  slug: string
): Promise<{ views: number }> => {
  // --- Compteur de vues désactivé temporairement ---
  const cookieList = cookies();
  const currentPostCookieDate = cookieList.get(`postview:${slug}`)?.value;
  const KEY = `postview:${slug}`;

  if (currentPostCookieDate) {
    console.log(`Post ${slug} already viewed on ${currentPostCookieDate}`);

    return {
      views: Number(await redis.get(KEY)),
    };
  }

  const newViewCount = await redis.incr(KEY);
  cookieList.set(`postview:${slug}`, new Date().toISOString(), {
    path: "/",
    maxAge: 60 * 60 * 12,
    httpOnly: true,
  });

  return { views: Number(newViewCount) };

  // Retourne une valeur statique pour le moment
  // return { views: 0 };
};
