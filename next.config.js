/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.lumacdn.com",
      "images.unsplash.com",
      "cdn.lu.ma",
      "images.hindustantimes.com"
    ],
  }
}
const withImages = require('next-images')
module.exports = nextConfig
