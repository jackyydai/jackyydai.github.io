import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/jackyydai.github.io/' : '',
  basePath: isProd ? '/jackyydai.github.io' : '',
  output: 'export'
};

export default nextConfig;
