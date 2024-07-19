import { getProjects } from '@/app/lib/data'
import React from 'react'
import ProjectCard from './ProjectCard'
import { notFound } from 'next/navigation';

const ProjectsList = async () => {
    const projects = await getProjects()

    if (!projects) {
        notFound();
    }

    return (
        <>
            {projects &&
                projects.map((project, index) => (
                    <ProjectCard key={index} projectID={project._id} urlImage={project.urlImage} name={project.name} description={project.description} />
                ))}
        </>
    )
}

export default ProjectsList