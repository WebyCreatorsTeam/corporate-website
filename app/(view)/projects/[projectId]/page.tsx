// import { getOneProject } from '@/app/lib/data';
import { getOneProject } from '@/app/lib/data/projects/project.data';
import Image from 'next/image';
import React, { FC } from 'react'

interface IPageProject {
    params: { projectId: string }
}
const page: FC<IPageProject> = async ({ params }) => {
    const { projectId } = params;
    const project = await getOneProject(projectId)

    return (
        <>
            <Image src={project!.urlImage} alt={project!.name} width={600} height={300} />
            <h1>{project?.name}</h1>
            <p>{project?.description}</p>
        </>
    )
}

export default page