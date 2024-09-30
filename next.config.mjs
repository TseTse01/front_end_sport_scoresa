/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false; // Désactive le cache Webpack
    return config;
  },
};

export default nextConfig;
