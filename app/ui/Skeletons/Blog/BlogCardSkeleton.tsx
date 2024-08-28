import React from 'react'

const BlogCardSkeleton = () => {
    return (
        <article className="max-w-sm bg-white border border-gray-300 rounded-lg shadow animate-pulse">
            <div className="w-[322px] sm:w-[382px] h-[215px] bg-slate-300 rounded-t-lg"></div>
            <div className="p-5">
                <p className="w-[130px] mb-3 text-sm font-normal text-gray-700 h-4 bg-slate-300 rounded"></p>
                <h5 className="mb-4 mt-6 text-2xl font-bold tracking-tight text-gray-900 h-8 bg-slate-300 rounded"></h5>
                <p className="mb-3 text-base font-normal text-gray-700 h-5 bg-slate-300 rounded" ></p>
                <p className="w-[200px] mb-5 text-base font-normal text-gray-700 h-5 bg-slate-300 rounded" ></p>
                <p className="w-[150px] mb-3 text-base font-normal text-gray-700 h-11 bg-slate-300 rounded" ></p>
            </div>
        </article>
    )
}

export default BlogCardSkeleton