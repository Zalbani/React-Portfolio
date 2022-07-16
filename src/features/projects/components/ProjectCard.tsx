import { Project } from '../interfaces/Project'
import React from 'react'

function ProjectCard({
    project,
    yhea,
    children,
}: {
    project: Project
    yhea: Boolean
    children: React.ReactNode
}) {
    return (
        <div onClick={() => handleClick(project.name)}>
            {project.name}
            {yhea && <span>{children}</span>}
        </div>
    )
}

function handleClick(projectName: String) {
    alert(`Super ${projectName}`)
}

export default ProjectCard
