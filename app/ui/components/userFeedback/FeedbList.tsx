import { getFeedbacks } from '@/app/lib/data/feedbacks/feedbacks.data'
import Image from 'next/image'

const FeedbList = async () => {
    const feedbacks = await getFeedbacks()

    if (!feedbacks) {
        return <>
            לא נמצא
        </>
    }

    return (
        <>
            {feedbacks.map(fdb => (
                <article key={fdb._id} dir='rtl'>
                    <div className='feedbacks__main--feedback'>
                        <h3>{fdb.customerName},
                            <br /> &ldquo;{fdb.webSiteName}&ldquo;</h3>
                        <Image src="/images/feedback/stars.svg" alt="חמש כוכבים" width="120" height="24" />
                        <p>&quot;{fdb.customerFeedback}&quot;</p>
                    </div>
                </article>
            ))}
        </>
    )
}

export default FeedbList