

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['yozbrydxdlcxghkphhtq.supabase.co'],
    }
};

module.exports = nextConfig;
