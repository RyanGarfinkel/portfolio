import { Project } from '../../public/projectData';
import { useRouter } from 'next/router';
import { ArrowTopRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import Carousel from './carousel';

interface ProjectDisplayProps {
    project: Project;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ project }) => {

    const router = useRouter();

    const handleBackToProjects = () => router.push('/projects');

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row items-center hover:underline hover:underline-offset-5'>
                <ChevronLeftIcon width={17} height={17}/>
                <button onClick={handleBackToProjects}>
                    Back
                </button>
            </div>
            <div className='mb-4 font-semibold sm:text-[22px] md:text-[26px]'>
                { project.title }
            </div>
            <Carousel title={project.title} urls={project.imgUrl}/>
            <div className='mt-7 mb-4'>
                { project.p1 }
            </div>
            <div className='mb-7'>
                { project.p2 }
            </div>
            <div className='flex flex-row mt-2'>
                <a href={project.gitHub} target='_blank' rel='noreferrer' className='flex flex-row items-center hover:underline underline-offset-[5px] mr-2'>
                    <ArrowTopRightIcon/>
                    GitHub
                </a>
                {
                    project.devpost && (
                        <a href={project.devpost} target='_blank' rel='noreferrer' className='flex flex-row items-center hover:underline underline-offset-[5px]'>
                            <ArrowTopRightIcon/>
                            Devpost
                        </a>
                    )
                }
            </div>
        </div>
    );
};

export default ProjectDisplay;