/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "museum.linkaythinktank.com",
      },
      {
        protocol: "http",
        hostname: "museum.linkaythinktank.com",
      },
    ],
  },
};

module.exports = nextConfig;
