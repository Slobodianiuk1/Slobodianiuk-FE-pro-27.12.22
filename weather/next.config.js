/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['w7.pngwing.com', 'openweathermap.org']
  },
  env: {
    API_URL: process.env.API_URL,
    KEY: process.env.KEY,
    UNITS: process.env.UNITS

  }
}

module.exports = nextConfig
