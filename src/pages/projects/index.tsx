import projectData from '../../../public/projectData';
import Card from '../../components/card';

const Projects = () => {

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

export default Projects;