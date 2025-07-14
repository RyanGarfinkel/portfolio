import jobs, { Job } from '@/data/jobs';

interface JobCardProps {
    job: Job;
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {

    return (
        <div className='container flex flex-col p-8 text-lg' tabIndex={0}>
            <span className='text-xl'>
                <span className='font-semibold'>{ job.title } </span>
                <span className='text-secondary'>@ { job.company }</span>
            </span>
            <span className='text-secondary'>{ job.date }</span>
            <ul className='list-disc mt-4 pl-6'>
                {
                    job.description.map((desc, index) => (
                        <li key={index} className='mb-2'>{ desc }</li>
                    ))
                }
            </ul>
        </div>
    );
};

const Work = () => {

    return (
        <div className='flex flex-col'>
            <h1>
                Work History.
            </h1>
            <p className='text-xl text-secondary'>
                I&apos;m grateful for experiences that helped me grow as a developer - learning new technologies, working in teams, and contributing to real codebases.
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
