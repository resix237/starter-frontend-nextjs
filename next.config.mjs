/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "pamj.swyvi.com/", "localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
     
    ],
  },
  publicRuntimeConfig: {
//     import getConfig from 'next/config';

// // Récupérer la configuration runtime
// const { publicRuntimeConfig } = getConfig();

// // Accéder à l'URL de base de l'API
// const apiBaseUrl = publicRuntimeConfig.apiBaseUrl;
    apiBaseUrl: process.env.API_BASE_URL || "http://localhost:5000",
  },
};

export default withNextIntl(nextConfig);