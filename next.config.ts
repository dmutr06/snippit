import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://lh3.googleusercontent.com/**")]
    },
    experimental: {
        authInterrupts: true
    }
};

export default nextConfig;
