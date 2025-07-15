import projects, { Project } from '@/data/projects';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const featuredProjects: Project[] = projects.slice(0, 4);

interface MiniProjectCardProps {
    project: Project;
};

const MiniProjectCardProps: React.FC<MiniProjectCardProps> = ({ project }) => {

    return (
        <Link href={`/projects/${project.id}`} className='container p-6 rounded-2xl space-y-4 group'>
            <div className='flex items-center gap-3'>
                <div className={`w-12 h-12 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-full flex items-center justify-center`}>
                    <span className='text-2xl'>{project.symbol}</span>
                </div>
                <h3 className='text-xl font-semibold'> { project.title } </h3>
            </div>
            <p className='text-secondary'>
                { project.oneLiner }
            </p>
            <div className='flex flex-wrap gap-2'>
                {
                    project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className='px-3 py-1 w-fit border border-primary rounded-full text-sm'>{ tag }</span>
                    ))
                }
            </div>
        </Link>
    );
};

const FeaturedProjects = () => {

    return (
        <div className='mt-16 space-y-8'>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-semibold'>
                    Featured Projects
                </h2>
                <Link href='/projects' className='flex items-center gap-2 text-primary hover:underline underline-offset-4'>
                    View all projects
                    <ArrowRightIcon className='w-4 h-4' />
                </Link>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {
                    featuredProjects.map((project, index) => (
                        <MiniProjectCardProps key={index} project={project} />
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedProjects;
