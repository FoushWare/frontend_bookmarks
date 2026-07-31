/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/frontend_bookmarks',
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
