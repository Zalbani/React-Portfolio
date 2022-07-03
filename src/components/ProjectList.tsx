import '../styles/components/Header.css'

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
                <li key={`${project.name}-${index}`}>
                    {project.name}
                    { project.isInsane && <span>🔥</span> }
                </li>
            ))}
        </ul>
    )
}

export default ProjectList
