import React from 'react'
import { FAQquestion } from './FAQData';
import QItem from '@/app/ui/components/QItem/QItem';

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