import type { MetadataRoute } from 'next';
import projects from '@/data/projects';

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        { url: 'https://www.ryangarfinkel.dev/', lastModified: new Date() },
        { url: 'https://www.ryangarfinkel.dev/about', lastModified: new Date() },
        { url: 'https://www.ryangarfinkel.dev/projects', lastModified: new Date() },
        { url: 'https://www.ryangarfinkel.dev/work', lastModified: new Date() },
        { url: 'https://www.ryangarfinkel.dev/contact', lastModified: new Date() },
        { url: 'https://www.ryangarfinkel.dev/resume', lastModified: new Date() },
    ];

    const projectPages = projects.map(project => ({
        url: `https://www.ryangarfinkel.dev/projects/${project.id}`,
        lastModified: new Date(),
    }));

    return [
        ...staticPages,
        ...projectPages,
    ];
}

export const dynamicSitemap = true;
