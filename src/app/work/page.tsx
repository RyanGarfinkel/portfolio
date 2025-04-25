import JobView from '@/components/job-view';
import { Job } from '~/assets/data/jobs';
import jobs from '~/assets/data/jobs';

const Work = () => {

    return (
        <div className='col'>
            <div className='title my-3'>
                Work Experience
            </div>
            <div className='mt-2 mb-5 text-lg sm:text-[18px] md:text-[20px]'>
                My work experience has made me a stronger communicator and software developer. I&apos;m grateful for the opportunities I&apos;ve had to learn
                new technologies, actively engage in the software development life cycle, and contribute to large, existing codebases. These experiences have
                also strengthened my ability to collaborate in team environments, ask questions, and manage my time effectively.
            </div>
            <div>
                <ul>
                    <li className='relative flex gap-6'>
                        <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-foreground my-3' />
                    </li>
                    {
                        jobs.map((job: Job, i: number) => (
                            <li key={i} className='relative flex gap-6'>
                                <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-foreground my-2'>
                                    <div className="w-3 h-3 rounded-full bg-foreground"/>
                                </div>
                                <JobView job={job} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Work;