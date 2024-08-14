import { getFeedbacks } from '@/app/lib/data/feedbacks/feedbacks.data'
import Image from 'next/image'
import React from 'react'
// import Stars from './images/feedback/stars.svg'
const FeedbList = async () => {
    const feedbacks = await getFeedbacks()

    return (
        <>



            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {feedbacks &&
                        feedbacks.map((fdb, index) => (
                            <div key={fdb._id} className="hidden duration-700 ease-in-out" data-carousel-item={index === 0 ? 'active' : ''}>
                                <article dir='rtl' className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <div className='feedbacks__main--feedback'>
                                        <h3>{fdb.customerName},
                                            <br /> {`"${fdb.webSiteName}"`}
                                        </h3>
                                        <Image src="/images/feedback/stars.svg" alt="חמש כוכבים" loading="lazy" width={120} height={24} />
                                        <p>{`"${fdb.customerFeedback}"`}</p>
                                    </div>
                                </article>
                            </div>
                        ))}
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </>
    )
}

export default FeedbList


// {/* <!-- Item 1 --> */}
// <div className="hidden duration-700 ease-in-out" data-carousel-item="active">

// </div>
// {/* <!-- Item 2 --> */}
// <div className="hidden duration-700 ease-in-out" data-carousel-item>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1-JxundonqHJJT1n-3mOuU0YzvwYvh_vDQ&s" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." width={300} height={200} />
// </div>
// {/* <!-- Item 3 --> */}
// <div className="hidden duration-700 ease-in-out" data-carousel-item>
//     <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." width={300} height={200} />
// </div>
// {/* <!-- Item 4 --> */}
// <div className="hidden duration-700 ease-in-out" data-carousel-item>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1-JxundonqHJJT1n-3mOuU0YzvwYvh_vDQ&s" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." width={300} height={200} />
// </div>
// {/* <!-- Item 5 --> */}
// <div className="hidden duration-700 ease-in-out" data-carousel-item>
//     <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." width={300} height={200} />
// </div>
