/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rewrites legacy  URLs to root paths
  async rewrites() {
    return [{ source: '/frontend_bookmarks/:path*', destination: '/:path*' }];
  },
  // Ensure the app runs at the root path
  // Uncomment basePath if you ever need a subdirectory
  // basePath: '',
  reactStrictMode: true,
  // Configure the images folder (optional)
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
