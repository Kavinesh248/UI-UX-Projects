import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imag.clerk.com",
      },
    ],
  },
};

export default nextConfig;
