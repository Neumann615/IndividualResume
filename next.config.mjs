import {withContentlayer} from 'next-contentlayer';

/** @type {import('next').NextConfig} */

const nextConfig = {
    compress: true,
    images: {
        domains: ['avatars.githubusercontent.com', 'cloudflare-ipfs.com'],
        formats: ['image/webp']
    }
}

export default withContentlayer(nextConfig)
