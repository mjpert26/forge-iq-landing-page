import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents is intentionally off: with it, visited pages stay mounted
  // (hidden) after navigation, which duplicates section and SVG gradient ids
  // across the two pages. Both pages are fully static either way.
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
