/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  staticPageGenerationTimeout: 600,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
