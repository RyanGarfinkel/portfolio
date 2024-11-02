import ProjectDisplay from '@/components/project-display';
import ProjectList from '@/components/project-list';
import { useRouter } from 'next/router';
import projectData from '../../public/projectData';

const ProjectsPage = () => {

    const router = useRouter();
    const query = router.query;
    const project = projectData.find(p => p.title.toLowerCase().replace(' ', '-') === query.id);

    if(query.id && !project)            
        router.push('/404');

    return (
        <div>
            {
                project ? (
                    <ProjectDisplay project={project} />
                ) : (
                    <ProjectList/>
                )
            }
        </div>
    );
};

export default ProjectsPage;