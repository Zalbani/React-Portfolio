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
        <li onClick={() => handleClick(project.name)}>
            {project.name}
            {yhea && <span>{children}</span>}
        </li>
    )
}

function handleClick(projectName: String) {
    alert(`Super ${projectName}`)
}

export default ProjectCard
