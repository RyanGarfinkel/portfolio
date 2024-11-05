import jobHistory from '../../public/jobData';

const WorkPage = () => {

    return (
        <div>
            <div className='font-semibold sm:text-[22px] md:text-[26px]'>
                Work Experience
            </div>
            <div className='mt-2 mb-5'>
                My work experience has made me a stronger communicator and software developer. I&apos;m grateful for the opportunities I&apos;ve had to learn
                new technologies and actively engage in the software development life cycle. 
            </div>
            {
                jobHistory.map((job, i) => (
                    <div key={i} className='flex flex-col leading-loose'>
                        <hr className='mb-5 border-t-2'/>
                        <div className='flex flex-col w-full'>
                            <div className='font-semibold text-lg'>
                                { job.company }
                            </div>
                            <div className='italic text-md'>
                                { job.position }
                            </div>
                            <div className='text-sm'>
                                { job.startDate } - { job.endDate ?? 'Present' }, { job.location }
                            </div>
                            {
                                job.preDescription &&  (
                                    <div className='my-3'>
                                        { job.preDescription }
                                    </div>
                                )
                            }
                            {
                                job.description &&  (
                                    <ul className='list-disc pl-5'>
                                        {
                                            job.description.map((desc, i) => (
                                                <li key={i}>
                                                    { desc }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                            {
                                job.postDescription && (
                                    <div className='mt-3 mb-5'>
                                        { job.postDescription }
                                    </div>
                                )
                            }
                        </div>
                    </div> 
                ))
            }
        </div>
    );
};

export default WorkPage;