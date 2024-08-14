import { Suspense } from "react"
import ProjectsList from "./ProjectsList"
import ProjectsCardsSkeleton from "../../Skeletons/ProjectsCardsSkeleton"

const ProjectsSection = async () => {
    return (
        <section className="projectsSection" id="projects">
            <h2>פרויקטים</h2>
            <div className="elementWidth projectsSection__projects">
                <Suspense fallback={<ProjectsCardsSkeleton />}>
                    <ProjectsList />
                </Suspense>
            </div>
        </section>
    )
}

export default ProjectsSection