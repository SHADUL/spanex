import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // No remote images are used anywhere on this site.
    remotePatterns: [],
  },
};

export default nextConfig;
