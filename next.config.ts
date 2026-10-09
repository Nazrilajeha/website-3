import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/website-3",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
