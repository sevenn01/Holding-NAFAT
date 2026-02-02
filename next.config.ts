import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "3000",
        pathname: "/path/to/images/**",  // This defines a specific path pattern for images
      },
      // If you need to add more patterns, just follow the same structure
      {
        protocol: "http",  // For non-secure protocols, if necessary
        hostname: "127.0.0.1",
        port: "3000",
        pathname: "/path/to/images/**",
      },
    ],
  },
};

export default nextConfig;
