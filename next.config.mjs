/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.api-sports.io"], // Ajoute le domaine autorisé ici
  },
  webpack: (config) => {
    config.cache = false; // Désactive le cache Webpack
    return config;
  },
};

export default nextConfig;
