import BlogSection from '@/app/ui/components/Blog/BlogSection'
import BlogsCardsSkeleton from '@/app/ui/Skeletons/Blog/BlogsCardsSkeleton'
import Image from 'next/image'
import React, { Suspense } from 'react'

export const dynamic = "force-dynamic"
export const experimental_ppr = true;

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