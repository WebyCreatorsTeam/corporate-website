import { getBlog } from '@/app/lib/data/blog/blog.data'
import React from 'react'
import BlogCard from './BlogCard'

const BlogSection = async () => {
    const blog = await getBlog()

    if (!blog) return <>null</>
    return (
        <>
            {blog && blog.map((post) => (
                <BlogCard key={post._id} post={post} />
            ))}
        </>
    )
}

export default BlogSection;