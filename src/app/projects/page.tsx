import projects, { Project } from '@/data/projects';
import { GitHubLogoIcon, Pencil2Icon, Link2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { NavButton } from '@/components/button';

interface ProjectCardProps {
    project: Project;
};

const Card: React.FC<ProjectCardProps> = ({ project }) => {

    const symbol = (
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo}`} style={{ aspectRatio: '1 / 1' }}>
            <span className='text-2xl font-semibold'>{project.symbol}</span>
        </div>
    );

    return (
        <div className='flex flex-col container p-8 rounding-3xl'>
            <div className='flex items-center gap-4 mb-6'>
                { symbol }
                <span className='text-2xl font-bold'>
                    { project.title }
                </span>
            </div>
            <p className='text-lg text-secondary leading-relaxed mb-4'>
                { project.oneLiner }
            </p>
            <Image
                src={`${project.baseImgUrl}${project.imageUrls[0]}`}
                width={600}
                height={400}
                alt={project.title}
                className='w-full h-full object-cover rounded-3xl'
            />
            <div className='flex gap-3 mt-4'>
                {
                    project.tags.map((tag, index) => (
                        <span key={index} className='px-3 py-1 text-sm font-medium rounded-full border border-primary/20 text-primary'>
                            { tag }
                        </span>
                    ))
                }
            </div>
            <div className='flex gap-3 mt-6'>
                <NavButton
                    title='View Details'
                    href={`/projects/${project.id}`}
                    openInSelf
                />
                {
                    project.liveDemo ? (
                        <NavButton
                            icon={<Link2Icon />}
                            title='Live Demo'
                            href={project.liveDemo}
                            type='secondary'
                        />
                    ) : project.devpost ? (
                        <NavButton
                            icon={<Pencil2Icon />}
                            title='Devpost'
                            href={project.devpost}
                            type='secondary'
                        />
                    ) : (
                        <NavButton
                            icon={<GitHubLogoIcon />}
                            title='View Code'
                            href={project.gitHub}
                            type='secondary'
                        />
                    )
                }
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className='flex flex-col space-y-8'>
            <div className='space-y-4'>
                <h1 className='text-5xl font-bold'>
                    Projects.
                </h1>
                <p className='text-xl text-secondary leading-relaxed max-w-4xl'>
                    A showcase of innovative solutions I&apos;ve built, demonstrating my journey in full-stack development and problem-solving. Each project represents a learning experience and technical challenge overcome.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    projects.map((project, index) => (
                        <Card key={index} project={project} />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
