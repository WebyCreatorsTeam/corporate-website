import React from 'react'
import { FAQquestion } from './FAQData';
import QItem from '@/app/ui/components/QItem/QItem';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
      title: "שאלות נפוצות",
      description: "יש לכם שאלות? אנחנו כאן בשביל לענות עליהם!",
      metadataBase: new URL("https://www.weby.team"),

      openGraph: {
          title: "שאלות נפוצות",
          description: "יש לכם שאלות? אנחנו כאן בשביל לענות עליהם!",
          url: "https://www.weby.team/faq",
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
const Page = () => {
  return (
    <section className='elementWidth faq' id="faq">
      <div className='faq__info'>
        <h2>שאלות נפוצות</h2>
        <p>כאן תמצאו תשובות לשאלות ששואלים אותנו לעיתים קרובות. אם לא מצאתם תשובה לשאלה שלכם, אל תהססו ליצור קשר - נשמח לעזור!</p>
        <div className='faq__quest'>
          {FAQquestion.map((q, idx) => (
            <QItem key={idx} faq={q} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page