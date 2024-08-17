import { FC, Suspense } from 'react'
import FeedbList from './FeedbList'
import FeedbacksCardsSkeleton from '../../Skeletons/Feedbacks/FeedbacksCardsSkeleton';

const UsersFeedbacks: FC = () => {
    return (
        <section className='elementWidth feedbacks' id="feedbacks">
            <h2>מה לקוחות אומרים עלינו?</h2>
            <div className='feedbacks__main'>
                <Suspense fallback={<FeedbacksCardsSkeleton/>}>
                    <FeedbList />
                </Suspense>
            </div>
        </section>
    )
}

export default UsersFeedbacks;