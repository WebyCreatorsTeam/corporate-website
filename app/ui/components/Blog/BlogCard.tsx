import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({post}:any) => {
    return (
        <article key={post._id} className="max-w-sm bg-white border border-gray-300 rounded-lg shadow">
            <Link href={`/blog/${post.title.replaceAll(' ', '-')}`}>
                <Image className="rounded-t-lg" src={post.smallImg} alt="" width={445} height={250} />
            </Link>
            <div className="p-5">
                <p className="mb-3 text-sm font-normal text-gray-700">{new Date(post.createdAt).toLocaleDateString("en-GB", { year: "numeric", month: "numeric", day: "numeric" })}</p>
                <Link href={`/blog/${post.title.replaceAll(' ', '-')}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{post.title}</h5>
                </Link>
                <p className="mb-3 text-base font-normal text-gray-700">{post.content}...</p>
                <Link href={`/blog/${post.title.replaceAll(' ', '-')}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-purple-800 border-2 text-purple-800 bg-slate-50 rounded-lg hover:bg-violet-100 hover:text-violet-700 focus:ring-2 focus:outline-none focus:bg-violet-100">
                    המשך קריאה
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}

export default BlogCard