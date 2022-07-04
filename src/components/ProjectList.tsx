import '../styles/components/Header.css'
import ProjectCard from "./ProjectCard";

const projectList = [
    {
        name: 'agenda',
        isInsane: true
    },
    {
        name: 'open',
        isInsane: false
    },
    {
        name: 'treat',
        isInsane: false
    },
    {
        name: 'yhea',
        isInsane: true
    }
]

function ProjectList() {
    return (
        <ul>
            {projectList.map((project, index) => (
                <ProjectCard key={`${project.name}-${index}`} project={project} yhea={project.isInsane}>
                    🔥
                </ProjectCard>
            ))}
        </ul>
    )
}

export default ProjectList
