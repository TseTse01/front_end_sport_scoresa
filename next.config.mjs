/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    // Désactive la mise en cache
    config.cache = false;

    // Ajoute une règle pour les fichiers SVG
    config.module.rules.push({
      test: /\.svg$/, // Détecte les fichiers SVG
      use: [
        {
          loader: "@svgr/webpack", // Utilise svgr pour importer les SVG comme composants
          options: {
            svgo: true, // Optimisation SVG
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
