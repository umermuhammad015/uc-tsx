import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // eslint:{
  //   ignoreDuringBuilds: true
  // }
  typescript: {
    ignoreBuildErrors: true, // This will ignore TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during build
  },
};

export default nextConfig;
