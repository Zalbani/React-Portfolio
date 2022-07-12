import { Project } from '../interfaces/Project'
import React from 'react'

import styled from 'styled-components'

interface IsBlueProps {
    readonly isBlue: boolean
}

const Card = styled.li<IsBlueProps>`
    color: red;
    font-size: 22px;
    ${(props) => props.isBlue && `color: blue;`}
`

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
        <Card onClick={() => handleClick(project.name)} isBlue>
            {project.name}
            {yhea && <span>{children}</span>}
        </Card>
    )
}

function handleClick(projectName: String) {
    alert(`Super ${projectName}`)
}

export default ProjectCard
