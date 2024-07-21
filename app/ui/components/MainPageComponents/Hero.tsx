import Image from 'next/image'
import React from 'react'
import { suezOne } from '../../fonts/fonts'
import Link from 'next/link'

const Hero = () => {
    // ${suezOne.className}
    return (
        <section className={` hero elementWidth`}>
            <section className={`hero__textSection`}>
                <div>
                    <p>יש לכם עסק? מיזם? סטארטפ?</p>
                    <p>צריכים לשפר את האתר שלכם?</p>
                </div>
                <h1>
                    בואו לבנות את האתר שלכם
                    <br />
                    שיקח אתכם צעד אחד
                    <span>
                        {" "}                 קדימה
                    </span>
                </h1>

                <button>
                    <Link
                        href="/"
                        // smooth={true}
                        // offset={50}
                        // duration={500}
                        >
                        כתבו לנו
                    </Link>
                </button>
            </section>

            <section className={`hero__imageSection`}>
                <Image
                    src="/images/hero/hero-web.webp"
                    alt="Weby Team Logo"
                    width={720}
                    height={371}
                    className='hidden lg:block'
                    priority
                />
                <Image
                    src="/images/hero/hero-mobile.webp"
                    alt="Weby Team Logo"
                    width={360}
                    height={185}
                    className='block lg:hidden'
                    priority
                />
            </section>
        </section>
    )
}

export default Hero