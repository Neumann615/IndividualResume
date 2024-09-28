import {withContentlayer} from 'next-contentlayer';

/** @type {import('next').NextConfig} */

const nextConfig = {
    compress: true,
}

export default withContentlayer(nextConfig)
