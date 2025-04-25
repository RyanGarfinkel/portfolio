import Card from '@/components/projects/card';
import projects from '~/assets/data/projects';

const Projects = () => {

    return (
        <div className='col'>
            <div className='title my-3'>
                Projects
            </div>
            <div className='my-2'>
                The projects I have worked on have given me the opportunity to learn new technologies and actively engage in the software development life cycle.
                During the development of these projects, I have learned how to work with a team, manage my time, and communicate effectively. Click on a project
                to see more details.
            </div>
            <div className='flex justify-center my-5'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-11 w-full'>
                    {
                        projects.map((project, i) => (
                            <Card key={i} project={project} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;
