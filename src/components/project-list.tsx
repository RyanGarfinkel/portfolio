import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import projectData, { Project } from '../../public/projectData';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface CardProps {
    project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
    
    const router = useRouter();
    const handleClick = () => router.push(`/projects?id=${project.title.toLowerCase().replace(' ', '-')}`);

    return (
        <div className='flex flex-col sm:w-[325px] md:w-[350px] h-[550px] border border-gray-300 rounded-xl p-4 shadow-lg before:bg-white before:bg-opacity-20' onClick={handleClick}>
            <Image src={project.imgUrl[0]} alt={project.title} width={350} height={192} className='w-full h-48 rounded-lg mb-4'/>
            <div className='flex flex-row justify-between items-center'>
                <div className='font-semibold text-lg'>
                    { project.title }
                </div>
                <div className='text-sm'>
                    { project.start } { project.end ? ` - ${project.end}` : '' }
                </div>
            </div>
            <div className='h-[168px] mt-3 mb-7'>
                { project.pretext }
            </div>
            <div className='flex flex-wrap h-[56px]'>
                {
                    project.techStack.map((tech, index) => (
                        <div key={index} className={`h-[22px] text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 border shadow-lg rounded`}>
                            { tech }
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-row mt-2'>
                <a href={project.gitHub} target='_blank' rel='noreferrer' className='flex flex-row items-center hover:underline underline-offset-[5px] mr-2' onClick={e => e.stopPropagation()}>
                    <ArrowTopRightIcon/>
                    GitHub
                </a>
                {
                    project.devpost && (
                        <a href={project.devpost} target='_blank' rel='noreferrer' className='flex flex-row items-center hover:underline underline-offset-[5px]' onClick={e => e.stopPropagation()}>
                            <ArrowTopRightIcon/>
                            Devpost
                        </a>
                    )
                }
            </div>
        </div>
    );
};

const ProjectList = () => {

    return (
        <div className='flex flex-col'>
            <div className='font-semibold sm:text-[22px] md:text-[26px]'>
                Projects
            </div>
            <div className='my-2'>
                The projects I have worked on have given me the opportunity to learn new technologies and actively engage in the software development life cycle.
                During the development of these projects, I have learned how to work with a team, manage my time, and communicate effectively. Click on a project
                to see more details.
            </div>
            <div className='flex justify-center my-5'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-11'>
                {
                    projectData.map((project, i) => (
                        <Card key={i} project={project} />
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default ProjectList;