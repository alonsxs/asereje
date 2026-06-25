import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cache.siclo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.siclo.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
