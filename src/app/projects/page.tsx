import projects, { Project } from '@/data/projects';
import ItemList from '@/components/item-list';
import '@/styles/components.css';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link href={`/projects/${project.id}`} className='project-card-link'>
            <div className='container project-card-container hover-grow'>
                <div className='project-card-image-wrapper'>
                    <Image
                        src={`${project.baseImgUrl}${project.imageUrls[0]}`}
                        alt={project.title}
                        fill
                        className='project-card-image'
                    />
                    <div className='project-card-overlay'>
                        <span className='text-white font-medium'>View Project Details &rarr;</span>
                    </div>
                </div>
                <div className='project-card-content'>
                    <div className='flex items-start justify-between gap-4'>
                        <div>
                            <h2 className='project-card-title'>
                                { project.title }
                            </h2>
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo}`}>
                            <span className='text-2xl'>
                                { project.symbol }
                            </span>
                        </div>
                    </div>

                    <p className='text-secondary leading-relaxed line-clamp-3 flex-grow'>
                        { project.oneLiner }
                    </p>

                    <div className='pt-2'>
                        <ItemList
                            items={project.tags}
                            type='str'
                            limit={3}
                            compact
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const Projects = () => {
    return (
        <div className='flex flex-col space-y-12'>
            <div className='space-y-6 text-left'>
                <h1 className='text-5xl font-bold tracking-tight'>
                    Projects.
                </h1>
                <p className='text-xl text-secondary leading-relaxed max-w-3xl'>
                    A showcase of innovative solutions I&apos;ve built, demonstrating my journey in full-stack development and problem-solving. Each project represents a learning experience and technical challenge overcome.
                </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
