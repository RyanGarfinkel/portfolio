import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.ryangarfinkel.dev';

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            priority: 0.8,
        },
    ]
};

export default sitemap;
