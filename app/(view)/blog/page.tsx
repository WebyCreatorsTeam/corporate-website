import BlogSection from '@/app/ui/components/Blog/BlogSection'
import BlogsCardsSkeleton from '@/app/ui/Skeletons/Blog/BlogsCardsSkeleton'
import { Metadata } from 'next'
import Image from 'next/image'
import React, { Suspense } from 'react'

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
    title: "בלוג",
    description: "משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג של Weby נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.",

    openGraph: {
        title: "בלוג",
        description: "משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג של Weby נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.",
        url: "https://www.weby.team/blog",
    }, 
}

const Page = async () => {
    return (
        <div className='elementWidth blog'>
            <div className='blog__header'>
                <h1>
                    הבלוג
                    <br />
                    שלנו
                </h1>
                <p className='header-text'>
                    משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג שלנו נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.
                </p>
                <div className='blog__header--img hidden min-[890px]:block'>
                    <Image src="/images/blog/blog.webp" alt="איור עמוד בלוג" width={813} height={616} />
                </div>
            </div>
            <section className='blog-section'>
                <Suspense fallback={<BlogsCardsSkeleton />}>
                    <BlogSection />
                </Suspense>
            </section>
        </div>
    )
}

export default Page