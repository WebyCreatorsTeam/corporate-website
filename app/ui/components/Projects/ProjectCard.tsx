import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const ProjectCard: FC<{ urlImage: string, name: string, description: string, projectID: string, url: string }> = ({ urlImage, name, description, projectID, url }) => {
    return (
        <Link href={url} className="project_card border bg-white shadow rounded-md p-4" target='_blank'>
                <div>
                    <div className="min-h-72  overflow-hidden rounded-lg hover:opacity-75"> {/*//hover:opacity-75*/}
                        <Image src={urlImage} alt={name} width={600} height={300} className="h-full w-full object-cover object-center" />
                        <div className="mt-6 text-sm text-gray-100 flex flex-col justify-between min-h-16">
                            <h3 className="text-black">{name}</h3>
                            <div className="text-black">{description}</div>
                        </div>
                    </div>
                </div>
        </Link>
    )
}

export default ProjectCard