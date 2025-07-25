import { createContentlayerPlugin } from "next-contentlayer";
import { withAxiom } from "next-axiom";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["w7.pngwing.com", "pbs.twimg.com", "images.unsplash.com"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: w7.pngwing.com pbs.twimg.com images.unsplash.com; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com;",
          },
        ],
      },
    ];
  },
};

// Contentlayer configuration
const withContentlayer = createContentlayerPlugin({
  // Additional contentlayer config options
});

export default withContentlayer(withAxiom(nextConfig));
