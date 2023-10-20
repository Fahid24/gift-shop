/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.chococraving.com",
      },
      {
        protocol: "https",
        hostname: "dropshop.com.bd",
      },
    ],
  },
};

module.exports = nextConfig;
