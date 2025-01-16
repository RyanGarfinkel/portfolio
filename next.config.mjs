/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/resume',
        destination: '/api/resume',
      },
    ];
  },
};

export default nextConfig;
