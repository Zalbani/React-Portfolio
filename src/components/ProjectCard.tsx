import {Project} from "../interfaces/Project";
import React from "react";

function ProjectCard({ project, yhea, children }: { project: Project; yhea: Boolean; children: React.ReactNode } ) {
    return (
        <li>
            {project.name}
            { yhea && <span>{ children }</span> }
        </li>
    )
}

export default ProjectCard
