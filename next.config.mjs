/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     ppr: 'incremental',
    // },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
        }],
    }
};

export default nextConfig;
