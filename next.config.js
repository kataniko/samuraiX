/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['staticdelivery.nexusmods.com', 
    'blogger.googleusercontent.com'],
  },
}

module.exports = nextConfig
