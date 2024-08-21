import { getBlog } from '@/app/lib/data/blog/blog.data'
import React from 'react'
import BlogCard from './BlogCard'
import { notFound } from 'next/navigation'

const BlogSection = async () => {
    const blog = await getBlog()

    if (!blog) {
        notFound()
    }
    
    return (
        <>
            {blog && blog.map((post) => (
                <BlogCard key={post._id} post={post} />
            ))}
        </>
    )
}

export default BlogSection;