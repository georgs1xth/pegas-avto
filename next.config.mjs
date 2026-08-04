// Clerk удалён (авторизация и админка больше не используются).
// Фото услуг остаются на uploadthing (utfs.io) — домен разрешён в img-src.
const cspHeader = `
 default-src 'self';
 script-src 'self' 'unsafe-inline' 'unsafe-eval';
 connect-src 'self';
 img-src 'self' data: https://utfs.io https://uploadthing.com https://*.ufs.sh https://*.amazonaws.com;
 worker-src 'self' blob:;
 style-src 'self' 'unsafe-inline';
 frame-src 'self';
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
    // Статичные страницы лежат в public/<путь>/index.html.
    // Vercel отдаёт их сам, а next dev — нет, поэтому добавляем рерайт:
    // /services → /services/index.html. afterFiles = только если ничего другого не совпало.
    async rewrites() {
        return {
            afterFiles: [
                { source: '/:path+', destination: '/:path+/index.html' },
            ],
        };
    },
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "utfs.io" },
            { protocol: "https", hostname: "**.ufs.sh" }
        ]
    }
};

export default nextConfig;
