/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jvsqpigrjvyywrrocvaq.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
