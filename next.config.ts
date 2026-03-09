import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  assetPrefix: isProd ? "/portfolio-web/" : "",
};

export default nextConfig;
