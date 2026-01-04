'use client';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import ItemList from '@/components/item-list';
import jobs, { Job } from '@/data/jobs';
import { useState } from 'react';
import '@/styles/components.css';

interface JobCardProps {
    job: Job;
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className='container job-card hover-grow'>
            <div className='flex flex-row md:justify-between items-start'>
                <span className='text-xl'>
                    <span className='font-semibold'>{ job.title } </span>
                    <span className='text-secondary'>@ { job.company }</span>
                </span>
                <ItemList items={[job.location]} type='str' />
            </div>
            <div className='text-secondary mb-4'>{ job.date }</div>
            <p className='text-secondary mb-4'>
                { job.summary }
            </p>
            <div className='flex flex-wrap mb-6'>
                <ItemList items={job.skills} type='str' />
            </div>

            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className='job-expand-button'
            >
                <span>{isExpanded ? 'Show Less' : 'Show More Details'}</span>
                <ChevronRightIcon className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? 'rotate-90' : ''}`} />
            </button>

            <div className={`job-details-wrapper ${isExpanded ? 'expanded' : ''}`}>
                <div className='job-details-inner'>
                    <div className='border-l-4 border-primary pl-4 py-1 mb-4 mt-2'>
                        <h3 className='text-lg font-semibold'>Key Responsibilities & Achievements</h3>
                    </div>
                    <ul className='list-disc pl-6 mb-4 text-secondary'>
                        {
                            job.description.map((desc, index) => (
                                <li key={index} className='mb-2'>{ desc }</li>
                            ))
                        }
                    </ul>
                    {
                        job.links && job.links.length > 0 && isExpanded && (
                            <div className='p-1'>
                                <div className='border-l-4 border-primary pl-4 py-1 mb-4'>
                                    <h3 className='text-lg font-semibold'>Links</h3>
                                </div>
                                <ItemList items={job.links} type='links' />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

const Work = () => {

    return (
        <div className='flex flex-col'>
            <h1>
                Professional Experience.
            </h1>
            <p className='text-xl text-secondary'>
                Grateful for experiences that have accelerated my learning, strengthened my collaboration skills, and allowed me to contribute meaningfully to real projects and student success.
            </p>
            <div className='flex flex-col mt-10 gap-8'>
                {
                    jobs.map((job, index) => <JobCard key={index} job={job} />)
                }
            </div>
        </div>
    );
};

export default Work;
