import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/documentation",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/documentation/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/intake",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/intake/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/docs/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
