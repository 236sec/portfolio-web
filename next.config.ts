import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/portfolio-web",
  assetPrefix: "/portfolio-web/",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
};

export default nextConfig;
