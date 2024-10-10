import jobHistory from '../../public/jobData';

const WorkPage = () => {

    return (
        <div className='w-full'>
            <div className='font-semibold sm:text-[22px] md:text-[26px]'>
                Work Experience
            </div>
            <div>
                My work experience has made me a stronger communicator and software developer. I&apos;m grateful for the opportunities I&apos;ve had to learn
                new technologies and actively engage in the software development life cycle. 
            </div>
            {
                jobHistory.map((job, i) => (
                    <div key={i} className='flex flex-col leading-loose'>
                        <hr className='my-8 border-t-2'/>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-row justify-between'>
                                <div className='font-semibold text-start'>
                                    { job.position }
                                </div>
                                <div className='text-end'>
                                    { job.startDate } - { job.endDate ?? 'Present' }
                                </div>
                            </div>
                            <div className='flex flex-row justify-between text-end mb-5'>
                                <div className='italic'>
                                    { job.company }
                                </div>
                                <div>
                                    { job.location }
                                </div>
                            </div>
                            <div>
                                { job.preDescription }
                            </div>
                            {
                                job.description ? (
                                    <ul className='list-disc my-5 pl-5'>
                                        {
                                            job.description.map((desc, i) => (
                                                <li key={i}>
                                                    { desc }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ) : null
                            }
                            <div>
                                { job.postDescription }
                            </div>
                        </div>
                    </div> 
                ))
            }
        </div>
    );
};

export default WorkPage;