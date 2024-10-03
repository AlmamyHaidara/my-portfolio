import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://tender-bobcat-22411.upstash.io",
  token: process.env.UPSTASH_REDIS_TOKEN,
});
