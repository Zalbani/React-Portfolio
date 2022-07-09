import { useParams } from 'react-router-dom'

function Project() {
    const { projectId } = useParams()
    return (
        <div>
            <h1>Projects {projectId}</h1>
        </div>
    )
}

export default Project
