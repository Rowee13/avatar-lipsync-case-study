import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    // experimental: {
    //     typedRoutes: true,
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    transpilePackages: ['three'],
}

export default nextConfig
