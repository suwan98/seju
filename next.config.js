const {withContentlayer} = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/app",
};

module.exports = withContentlayer(nextConfig);
