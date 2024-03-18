/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/booking',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
