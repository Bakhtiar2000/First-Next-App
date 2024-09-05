/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Accepts all hostnames
      },
    ],
  },
};

module.exports = nextConfig;
