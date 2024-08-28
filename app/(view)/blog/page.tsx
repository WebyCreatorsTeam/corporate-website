import BlogSection from '@/app/ui/components/Blog/BlogSection'
import BlogsCardsSkeleton from '@/app/ui/Skeletons/Blog/BlogsCardsSkeleton'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import React, { Suspense } from 'react'

export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "בלוג",
        description: "משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.",
        metadataBase: new URL("https://www.weby.team"),

        openGraph: {
            title: "בלוג",
            description: "משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.",
            url: "https://www.weby.team/blog",
            siteName: 'Weby Team',
            images: [{
                url: "https://www.weby.team/logo_white_bkgr.png",
                width: 730,
                height: 483,
                alt: "לוגו של וובי"
            }],
        }
    }
}




// export const metadata: Metadata = {
//     title: "בלוג",
//     description: "משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג של Weby נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.",
//     metadataBase: new URL("https://www.weby.team"),

//     openGraph: {
//         title: "בלוג",
//         description: "משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג של Weby נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.",
//         url: "https://www.weby.team/blog",
//         type: 'website',
//         siteName: 'Weby Team',
//         images: [{
//             url: "https://www.weby.team/logo_white_bkgr.png",
//             width: 730,
//             height: 483,
//             alt: "לוגו של וובי"
//         }],
//         emails: ['webycreatorsteam@gmail.com'],
//         phoneNumbers: ['972-51-5183320'],
//         countryName: 'Israel',
//     },
// }

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