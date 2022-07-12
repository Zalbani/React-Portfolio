import ProjectCard from './ProjectCard'

import { Loader } from '../../../components/ui/Loader'
import { Project } from '../interfaces/Project'

import { useEffect, useState } from 'react'

function ProjectList() {
    const [projects, setProjects] = useState<Array<Project>>([])
    const [isDataLoading, setIsDataLoading] = useState<Boolean>(false)

    useEffect(() => {
        async function fetchProjects() {
            setIsDataLoading(true)
            try {
                const response = await fetch(`/api/projects`)
                const projects = await response.json()
                setProjects(projects)
            } catch (err) {
                console.log(err)
            } finally {
                setIsDataLoading(false)
            }
        }
        fetchProjects()
    }, [])

    if (isDataLoading) {
        return <Loader />
    }
    return (
        <ul>
            {projects.map((project, index) => (
                <ProjectCard
                    key={`${project.name}-${index}`}
                    project={project}
                    yhea={project.isInsane}
                >
                    🔥
                </ProjectCard>
            ))}
        </ul>
    )
}

export default ProjectList
