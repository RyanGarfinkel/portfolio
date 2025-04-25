'use client';

import Image from 'next/image';
import { Project } from '~/assets/data/projects'

interface CardProps {
    project: Project
}

const Card: React.FC<CardProps> = ({ project }) => {

    const imgUrl = project.baseImgUrl + project.imageUrls[0];
    
    const redirectUrl = 'projects/' + project.title.replace(/\s+/g, '-').toLowerCase();

    const handleClick = () => window.location.href = redirectUrl;

    return (
        <div className='project-card cursor-pointer' onClick={handleClick}>
            <div className='row justify-between items-center'>
                <div className='title'>
                    { project.title }
                </div>
            </div>
            <Image src={imgUrl} width={1} height={1} alt={project.title} className='w-full h-[250px] shadow-md' unoptimized priority/>
            <div>
                { project.oneLiner }
            </div>
            <div className='underline underline-offset-4'>
                Project Details
            </div>
        </div>
    );
};

export default Card;