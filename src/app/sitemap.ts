import type { MetadataRoute } from 'next';
import projects from '@/data/projects';

const staticPages: MetadataRoute.Sitemap = [
    { url: '/', lastModified: new Date() },
    { url: '/about', lastModified: new Date() },
    { url: '/projects', lastModified: new Date() },
    { url: '/work', lastModified: new Date() },
    { url: '/contact', lastModified: new Date() },
    { url: '/resume', lastModified: new Date() },
];

const projectPages = projects.map(project => ({
    url: `/projects/${project.id}`,
    lastModified: new Date(),
}));

const sitemap: MetadataRoute.Sitemap = [
    ...staticPages,
    ...projectPages,
];

export default sitemap;
