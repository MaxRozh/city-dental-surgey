/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  async generateBuildId() {
    return 'build-' + Date.now();
  },
};

module.exports = nextConfig;
