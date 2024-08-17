import React from 'react'
import { servicesArr } from './servicesList'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
    return (
        <section className='servicesSection'>
            <section className='elementWidth services'>
                <h2>השירותים שלנו</h2>
                <section className='services__list'>
                    {servicesArr.map((service, index) => (
                        <div key={index}>
                            <Image src={service.icon} alt={service.title} width={64} height={64} />
                            <h3>{service.title}</h3>
                            <h4>{service.titleEn}</h4>
                            <p>{service.text}</p>
                        </div>
                    ))}
                </section>
                <p className='contact-us-if-need-more'>*
                    צריכים משהו נוסף? <Link href="#contact">דברו איתנו</Link>.</p>
                {/* <Link href="/how-it-works">איך זה עובד?</Link> */}
            </section>
        </section>
    )
}

export default Services