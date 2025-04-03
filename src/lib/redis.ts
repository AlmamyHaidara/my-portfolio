import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL || 'https://first-weevil-60238.upstash.io',
  token: process.env.UPSTASH_REDIS_TOKEN || '',
});

// await redis.set('foo', 'bar');
// const data = await redis.get('foo');