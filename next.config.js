/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'links.papareact.com'],
  },
  experimental: {
    appDir: true,
  },
}
