import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enable SWC minification and remove console in production */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  /* Optimize images */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  /* Enable React strict mode for better performance debugging */
  reactStrictMode: true,

  /* Enable compression for smaller bundles */
  compress: true,

  /* Remove next-devtools from production builds */
  devIndicators: false,
};

export default nextConfig;