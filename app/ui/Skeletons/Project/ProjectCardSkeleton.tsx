const ProjectCardSkeleton = () => {
    return (
        <div className="project_card border bg-white shadow rounded-md p-4 
        ">
            <div className="animate-pulse space-x-4">
                <div>
                    <div className="min-h-72 overflow-hidden rounded-lg bg-slate-300"></div>
                    <div className="mt-6 text-sm text-gray-100 flex flex-col justify-between min-h-16">
                        <div className="h-7 w-[200px] bg-slate-300 rounded"></div>
                        <div className="h-5 bg-slate-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardSkeleton