/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'true',
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
        }],
    }
};

export default nextConfig;
