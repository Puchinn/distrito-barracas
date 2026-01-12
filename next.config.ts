import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/distrito-barracas",
  assetPrefix: "/distrito-barracas/",
};

export default nextConfig;
