const cspHeader = `
 default-src 'self';
 script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.pegas-avto-a.com https://challenges.cloudflare.com;
 connect-src 'self' https://clerk.pegas-avto-a.com;
 img-src 'self' https://img.clerk.com https://uploadthing.com/ https://*.s3.amazonaws.com;
 worker-src 'self' blob:;
 style-src 'self' 'unsafe-inline';
 frame-src 'self' https://challenges.cloudflare.com;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '',
    async headers() {
        return [
        {
        source: "/(.*)",
        headers: [
        {
        key: "Content-Security-Policy",
        value: cspHeader.replace(/\n/g, ""),
        },
        ],
        },
        ];
        },
    basePath: '',
    images: {
        domains: [
            "utfs.io"
        ]
    }
};

export default nextConfig;
