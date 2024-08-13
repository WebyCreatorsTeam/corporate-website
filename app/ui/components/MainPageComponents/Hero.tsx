import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className={`hero elementWidth`}>
            <section className={`hero__textSection`}>
                <h1>
                    בואו לבנות את ה
                    <span>אתר</span>{" "}
                    שלכם
                    <br />
                    שיקח אתכם צעד אחד
                    <span>
                        {" "}קדימה
                    </span>
                </h1>
            </section>
            {/* <section style={{ display: "flex" }}>
                <div>
                    יצירתיות
                </div>
                <div>
                    |
                </div>
                <div>
                    התאמה אישית
                </div>
                <div>
                    |
                </div>
                <div>
                    תחזוקה
                </div>
            </section> */}
            <Link href="/">
                לצפיה בפרויקטים שלנו {">"}
            </Link>

            <section className={`hero__imageSection`}>
                <Image
                    src="/images/hero/hero-web.webp"
                    alt="Weby Team Logo"
                    width={1280}
                    height={720}
                    className='hidden sm:block'
                    priority
                />
                <Image
                    src="/images/hero/hero-mobile.webp"
                    alt="Weby Team Logo"
                    width={360}
                    height={185}
                    className='block sm:hidden'
                    priority
                />
            </section>
        </section>
    )
}

export default Hero