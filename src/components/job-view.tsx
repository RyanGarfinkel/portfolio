import { Job } from '../../public/assets/data/jobs';

interface JobViewProps {
    job: Job;
}

const JobView: React.FC<JobViewProps> = ({ job }) => {

    return (
        <div className='col w-full'>
            <div className='col w-full hover-list-item'>
                <div className='row items-center gap-2'>
                    <div className="rounded-md bg-foreground text-background py-1 px-2 font-semibold text-sm sm:text-[16px] md:text-[18px]">
                        { job.date }
                    </div>
                    <div className="font-bold text-lg sm:text-[18px] md:text-[20px]">
                        { job.title }
                    </div>
                    <div className="italic text-sm sm:text-[16px] md:text-[18px]">
                        { job.note }
                    </div>
                </div>
                {
                    job.description.map((desc, i) => (
                        <div key={i} className='mt-2 ml-1 text-lg sm:text-[18px] md:text-[20px]'>
                            { desc }
                        </div>
                    ))
                }
            </div>
            <div className='mb-6' />
        </div>
    );
};

export default JobView;