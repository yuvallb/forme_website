import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Site-root relative URLs so `out/index.html` opens in a browser without a server.
  assetPrefix: ".",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
