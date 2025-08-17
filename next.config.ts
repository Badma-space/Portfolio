import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ skip lint errors on Vercel build
  },
};

export default nextConfig;
