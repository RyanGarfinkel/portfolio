'use client';

import projects, { Project } from '@/data/projects';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { BackButton, NavButton } from '@/components/button';
import ToolList from '@/components/tool-list';
import Carousel from '@/components/carousel';
import { Link2Icon } from '@radix-ui/react-icons';
import '@/styles/project.css';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {

    const { id } = use(params);
    const project = projects.find((p: Project) => p.id === id);

    if (!project)
        notFound();

    return (
        <div className='flex flex-col'>
            <BackButton href='/projects' />
            <div className='flex flex-col md:flex-row md:items-center gap-6 mb-10'>
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo}`} style={{ aspectRatio: '1 / 1', minWidth: '5rem', minHeight: '5rem' }}>
                    <span className='text-4xl leading-none'>{ project.symbol }</span>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-4xl md:text-5xl font-bold leading-tight'>{ project.title }</h1>
                    <p className='text-xl text-secondary leading-relaxed font-light'>
                        { project.oneLiner }
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap gap-4 mb-10'>
                <NavButton 
                    title='View Code'
                    href={project.gitHub}
                    type='secondary'
                />
                {
                    project.devpost && (
                        <NavButton 
                            title='View Demo'
                            href={project.devpost}
                            type='primary'
                        />
                    )
                }
                {
                    project.liveDemo && (
                        <NavButton 
                            icon={<Link2Icon />}
                            title='Live Demo'
                            href={project.liveDemo}
                        />
                    )
                }
            </div>
            <div className='mb-10'>
                <ToolList tools={project.tags} />
            </div>
            <div className='space-y-8 mb-10'>
                <Carousel
                    basePath={project.baseImgUrl}
                    images={project.imageUrls}
                />
            </div>
            <div className='space-y-8'>
                <ul className='container p-8 rounded-2xl list-disc space-y-4'>
                    {
                        project.desc.map((point: string, idx: number) => (
                            <li
                                key={idx}
                                className='text-lg leading-relaxed text-secondary'
                                style={{ paddingLeft: '1.5em', textIndent: '0' }}
                            >
                                {point}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default ProjectPage;
