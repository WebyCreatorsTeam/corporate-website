import { getProjects } from "@/app/lib/data"
import Skeleton from "./Skeleton"

const ProjectsSection = async () => {
    const projects = await getProjects()
    return (
        <div>
            <h2>פרויקטים</h2>
            { projects &&
                projects.map((project, index) => (
                    <div key={index}>
                        <div>
                            <h3>{project.name}</h3>
                            {/* <Skeleton/> */}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectsSection