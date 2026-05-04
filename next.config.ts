import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = "/portfolio-web";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: true,
  images: {
    path: `${basePath}/_next/image`,
    unoptimized: true, // Optional: Use this if you're hosting images statically
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
