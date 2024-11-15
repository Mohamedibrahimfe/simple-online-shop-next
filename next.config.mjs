/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com", "https://i.ibb.co", "cdn.dummyjson.com"],
  },
};

export default nextConfig;
