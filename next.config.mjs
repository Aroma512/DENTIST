export default {
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com',
      'images.pexels.com'
    ],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
