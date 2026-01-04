'use client';

import { BackButton, NavButton } from '@/components/button';
import projects, { Project } from '@/data/projects';
import { Link2Icon } from '@radix-ui/react-icons';
import ItemList from '@/components/item-list';
import Carousel from '@/components/carousel';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {

    const { id } = use(params);
    const project = projects.find((p: Project) => p.id === id);

    if (!project)
        notFound();

    return (
        <div className='flex flex-col space-y-8 w-full'>
            <BackButton href='/projects' />
            <div className='flex flex-col md:flex-row items-start gap-6'>
                <div className={`w-20 h-20 rounded-3xl flex-shrink-0 flex items-center justify-center shadow-xl bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo}`}>
                    <span className='text-4xl leading-none'>{ project.symbol }</span>
                </div>
                <div className='space-y-2 w-full'>
                    <h1 className='text-4xl font-bold leading-tight'>{ project.title }</h1>
                    <p className='text-lg text-secondary font-light'>{ project.oneLiner }</p>
                </div>
            </div>
            <div className='w-full'>
                <Carousel
                    basePath={project.baseImgUrl}
                    images={project.imageUrls}
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='md:col-span-2'>
                    <div className='container p-6 md:p-8 rounded-2xl h-full'>
                        <h2 className='text-xl font-semibold mb-4'>Overview</h2>
                        <ul className='list-disc space-y-3 pl-5'>
                            {
                                project.desc.map((point: string, idx: number) => (
                                    <li
                                        key={idx}
                                        className='text-secondary leading-relaxed'
                                    >
                                        {point}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='md:col-span-1 space-y-6'>
                    <div className='container p-6 rounded-2xl space-y-4'>
                        <h3 className='font-semibold text-lg'>Links</h3>
                        <div className='flex flex-col gap-3'>
                            <NavButton 
                                title='View Code'
                                href={project.gitHub}
                                type='secondary'
                                className='w-full justify-center'
                            />
                            {
                                project.devpost && (
                                    <NavButton 
                                        title='View Demo'
                                        href={project.devpost}
                                        type='primary'
                                        className='w-full justify-center'
                                    />
                                )
                            }
                            {
                                project.liveDemo && (
                                    <NavButton 
                                        icon={<Link2Icon />}
                                        title='Live Demo'
                                        href={project.liveDemo}
                                        className='w-full justify-center'
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className='container p-6 rounded-2xl'>
                        <h3 className='font-semibold text-lg mb-4'>Technologies</h3>
                        <ItemList items={project.tags} type='tools' compact />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
