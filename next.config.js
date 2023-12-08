const withPWA = require('next-pwa')({
  dest: 'public',
  disable:
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'preview',
  // delete two lines above to enable PWA in production deployment
  // add your own icons to public/manifest.json
  // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  env: {
    MAP_BOX_API: process.env.MAP_BOX_API,
    NEXT_PUBLIC_SHOW_MAINTENANCE: process.env.NEXT_PUBLIC_SHOW_MAINTENANCE,
  },
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  redirects() {
    return process.env.NEXT_PUBLIC_SHOW_MAINTENANCE === '1'
      ? [
          {
            source: '/((?!maintenance).*)',
            destination: '/maintenance/',
            permanent: false,
          },
        ]
      : [
          {
            source: '/maintenance',
            destination: '/',
            permanent: false,
          },
        ];
  },
});
