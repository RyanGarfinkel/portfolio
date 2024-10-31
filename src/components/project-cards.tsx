import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import projectData, { Project } from '../../public/projectData';
import Image from 'next/image';

interface CardProps {
    project: Project;
}

const getColors = (tech: string) => {
    switch(tech) {
        case 'Socket.io':
            return 'bg-blue-200 text-blue-800';
        case 'MongoDB':
            return 'bg-green-200 text-gray-800';
        case 'Node.js':
            return 'bg-green-500 text-white';
        case 'Express.js':
            return 'bg-gray-800 text-white';
        case 'JWT':
            return 'bg-red-500 text-white';
        case 'C#':
            return 'bg-blue-500 text-white';
        case 'Unity':
            return 'bg-black text-white';
        case 'PHP':
            return 'bg-blue-800 text-white';
        case 'MySQL':
            return 'bg-blue-400 text';
        case 'Nodemailer':
            return 'bg-blue-200 text-blue-800';
        default:
            return 'bg-gray-200 text-gray-800';
    };
}

const Card: React.FC<CardProps> = ({ project }) => {
    
    return (
        <div className='flex flex-col sm:w-[325px] md:w-[350px] h-[550px] border border-gray-300 rounded-lg p-4 shadow-lg'>
            <Image src={project.imgUrl} alt={project.title} width={350} height={192} className='w-full h-48 object-cover rounded-lg mb-4'/>
            <div className='flex flex-row justify-between items-center'>
                <div className='font-semibold text-lg'>
                    { project.title }
                </div>
                <div className='text-sm'>
                    { project.start } { project.end ? ` - ${project.end}` : '' }
                </div>
            </div>
            <div className='max-h-[168px] my-3 overflow-hidden text-ellipsis'>
                <p className='line-clamp-[7]'>
                    { project.p1 + '\n' + project.p2 }
                </p>
            </div>
            <div className='flex flex-wrap h-[56px]'>
                {
                    project.techStack.map((tech, index) => (
                        <div key={index} className={`h-[20px] ${getColors(tech)} text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded`}>
                            {tech}
                        </div>
                    ))
                }
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

const ProjectsPage = () => {

    return (
        <div className='flex flex-col'>
            <div className='font-semibold sm:text-[22px] md:text-[26px]'>
                Projects
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

export default ProjectsPage;