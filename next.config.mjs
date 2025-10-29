/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true, // Use true for permanent redirect (308), false for temporary (307)
        },
      ];
    },
    // ...other Next.js configurations
  };

  export default nextConfig;
