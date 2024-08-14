// import { getProjects } from '@/app/lib/data'
import React from 'react'
import ProjectCard from './ProjectCard'
import { getProjects } from '@/app/lib/data/projects/project.data';

const ProjectsList = async () => {
    const projects = await getProjects()

    if (!projects || projects.length === 0) {
        return <>
            לא נמצא
        </>
    }

    return (
        <>
            {projects &&
                projects.map((project, index) => (
                    <ProjectCard key={index} projectID={project._id} urlImage={project.urlImage} name={project.name} description={project.description} route={"projects"}/>
                ))}
        </>
    )
}

export default ProjectsList