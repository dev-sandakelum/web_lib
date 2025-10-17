import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['app', 'components', 'resourses'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
