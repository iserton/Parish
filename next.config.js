/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
}

module.exports = {
    images: {
      domains: ['127.0.0.1', '3.10.214.193', 'parafia.bieda.it', 'parafiaandrzeja.pl'],
    },
    ignoreDuringBuilds: true,
    // ... any other existing configurations
  };

// export default nextConfig;