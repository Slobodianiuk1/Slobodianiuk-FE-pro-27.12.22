/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['w7.pngwing.com', 'openweathermap.org']
  },
  env: {
    KEY: process.env.KEY,
    API_URL: process.env.API_URL,
    UNITS: process.env.UNITS

  }
}

module.exports = nextConfig
