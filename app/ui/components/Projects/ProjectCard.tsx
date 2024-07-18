import Image from 'next/image'
import { FC } from 'react'

const ProjectCard: FC<{ urlImage: string, name: string, description: string }> = ({ urlImage, name, description }) => {
    return (
        <div className="border bg-white shadow rounded-md p-4 max-w-[650px]">
            <div>
                <div className="min-h-72 xl:min-w-[600px] lg:min-w-[400px] md:min-w-[250px] overflow-hidden rounded-lg hover:opacity-75">
                    <Image src={urlImage} alt={name} width={600} height={300} className="h-full w-full object-cover object-center" />
                    <div className="mt-6 text-sm text-gray-100 flex flex-col justify-between min-h-16">
                        <h3 className="text-black">{name}</h3>
                        <div className="text-black">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard