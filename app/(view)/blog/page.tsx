import { getBlog } from '@/app/lib/data/blog/blog.data'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const blog = await getBlog()
    
    return (
        <div>
            <h1>בלוג</h1>
            <section>
                {blog!.map((post, index) => (
                    <Link href={`/blog/${post.title.replace(/ /g, "-")}`} key={index}>
                        <h2>{post.title}</h2>
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default Page