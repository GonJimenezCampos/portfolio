import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Static export requires unoptimized images (or a custom loader)
    unoptimized: true,
  },
};

export default nextConfig;
