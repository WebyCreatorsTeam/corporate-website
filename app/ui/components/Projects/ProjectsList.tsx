import { getProjects } from '@/app/lib/data'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsList = async () => {
    const projects = await getProjects()
    return (
        <>
            {projects &&
                projects.map((project, index) => (
                    <ProjectCard key={index} urlImage={project.urlImage} name={project.name} description={project.description} />
                ))}
        </>
    )
}

export default ProjectsList