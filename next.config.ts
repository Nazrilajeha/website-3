import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/website-3",
  assetPrefix: "/website-3",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
