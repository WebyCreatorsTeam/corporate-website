import React from 'react'

const FeedbackCardSkeleton = () => {
    return (
        <article className="mb-4 w-[300px] h-[280px] sm:w-[480px] md:ww-[400px] lg:w-[470px] xl:w-[420px] 2xl:w-[500px] bg-white border border-gray-300 rounded-lg shadow animate-pulse">
            <div className="p-2">
                <p className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[130px] mb-3 text-base font-normal text-gray-700 h-8 bg-slate-300 rounded" ></p>
                <p className="w-[150px] sm:w-[240px] md:w-[200px] lg:w-[210px] mb-3 text-base font-normal text-gray-700 h-8 bg-slate-300 rounded" ></p>
                <p className="w-[280px] sm:w-[446px] md:w-[370px] lg:w-[392px] mb-3 text-base font-normal text-gray-700 h-5 bg-slate-300 rounded" ></p>
                <p className="w-[240px] sm:w-[384px] md:w-[320px] lg:w-[336px] mb-3 text-base font-normal text-gray-700 h-5 bg-slate-300 rounded" ></p>
                <p className="w-[260px] sm:w-[416px] md:w-[340px] lg:w-[364px] mb-3 text-base font-normal text-gray-700 h-5 bg-slate-300 rounded" ></p>
                <p className="w-[180px] sm:w-[288px] md:w-[240px] lg:w-[252px] mb-3 text-base font-normal text-gray-700 h-5 bg-slate-300 rounded" ></p>
            </div>
        </article>
    )
}

export default FeedbackCardSkeleton