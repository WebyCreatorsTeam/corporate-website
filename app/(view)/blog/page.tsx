import { getBlog } from '@/app/lib/data/blog/blog.data'
import ProjectCard from '@/app/ui/components/Projects/ProjectCard'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const blog = await getBlog()

    return (
        <div className='blog'>
            <div className='blog__header'>
                {/* <h1>בלוג</h1> */}
                <h1>
                    הבלוג
                    <br />
                    שלנו
                </h1>
                <p>
                    משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג שלנו נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.
                </p>
            </div>
            <section className='blog-section'>
                {blog!.map((post) => (
                    <ProjectCard
                        urlImage={post.smallImg}
                        name={post.title}
                        description={`${post.content}...`}
                        projectID={post.title.replace(/ /g, "-")}
                        route={"blog"}
                        key={post._id}
                    />
                ))}
            </section>
        </div>
    )
}

export default Page