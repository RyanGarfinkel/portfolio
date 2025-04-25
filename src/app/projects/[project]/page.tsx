'use client';

import ArrowLink from '@/components/arrow-link';
import Carousel from '@/components/projects/carousel';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { notFound } from 'next/navigation';
import { use } from 'react';
import projects from '~/assets/data/projects';

const getProject = (projectName: string) => {

    const project = projects.find((project) => project.title.replace(/\s+/g, '-').toLowerCase() === projectName);

    if(!project)
        return null;

    return project;
};

interface ProjectDisplayProps {
    params: Promise<{ project: string }>;
};

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ params }) => {

    const projectName = use(params).project;
    const project = getProject(projectName);

    if(!project)
        notFound();

    const handleBack = () => window.location.href = '/projects';

    return (
        <div className='sm:flex sm:flex-col-reverse md:row justify-between items-start w-full mt-8 space-x-[10%]'>
            <div className='col w-[45%]'>
                <div className='row items-center hover:underline hover:underline-offset-5'>
                    <ChevronLeftIcon width={17} height={17}/>
                    <button onClick={handleBack} className='mt-0.5'>
                        Back
                    </button>
                </div>
                <div className='title mt-6'>
                    { project.title }
                </div>
                <div className=''>
                    { 
                        project.desc.map((desc, i) => (
                            <div key={i} className='my-2 ml-1 text-lg sm:text-[18px] md:text-[20px]'>
                                { desc }
                            </div>
                        ))
                    }
                </div>
                <div className='row space-x-4'>
                    <ArrowLink url={project.gitHub} txt='Github' />
                    {
                        project.devpost && <ArrowLink url={project.devpost} txt='Devpost' />
                    }
                </div>
                <div className='row space-x-2'>
                    {
                        project.tags.map((tag, i) => (
                            <div key={i} className='my-2 ml-1 text-lg sm:text-[18px] md:text-[20px]'>
                                { `#${tag}` }
                            </div>
                        ))
                    }
                </div>  
            </div>
            <div className='row items-center my-auto sm:w-full md:w-[45%]'>
                <Carousel title={project.title} baseUrl={project.baseImgUrl} urls={project.imageUrls} />
            </div>
        </div>
    );
};

export default ProjectDisplay;