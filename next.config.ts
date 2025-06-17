import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     eslint: {
    ignoreDuringBuilds: true, // disables ESLint during build
  },
  images: {
    remotePatterns: [
        {
            protocol:"https",
            hostname:"licdn.com",
            pathname:"/**"
        },
        ],
    },
};
export default nextConfig;