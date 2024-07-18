const ProjectCardSkeleton = () => {
    return (
        <div className="border bg-white shadow rounded-md p-4 max-w-[650px]">
            <div className="animate-pulse space-x-4">
                <div>
                    <div className="min-h-72 xl:min-w-[600px] lg:min-w-[400px] md:min-w-[300px] overflow-hidden rounded-lg bg-slate-300"></div>
                    <div className="mt-6 text-sm text-gray-100 flex flex-col justify-between min-h-16">
                        <div className="h-6 bg-slate-300 rounded"></div>
                        <div className="h-5 bg-slate-300 rounded"></div>
                    </div>
                    <p className="text-base font-semibold text-gray-100	">Work from home accessories</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardSkeleton