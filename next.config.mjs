import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Webpack config for backward compatibility (Turbopack is default in Next.js 16)
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(process.cwd(), "src");
    return config;
  },

  // Turbopack config (used when not running with --webpack flag)
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
    // Explicitly set root directory to silence warning
    root: process.cwd(),
  },
};

export default nextConfig;
