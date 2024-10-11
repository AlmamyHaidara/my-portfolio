import { withContentlayer } from "next-contentlayer2";

const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },

};

export default withContentlayer (nextConfig);
