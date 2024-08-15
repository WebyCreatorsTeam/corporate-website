import { FC, Suspense } from 'react'
import FeedbList from './FeedbList'

const UsersFeedbacks: FC = () => {
    return (
        <section className='elementWidth feedbacks' id="feedbacks">
            <h2>מה לקוחות אומרים עלינו?</h2>
            <div className='feedbacks__main'>
                <Suspense fallback={<>loading</>}>
                    <FeedbList />
                </Suspense>
            </div>
        </section>
    )
}

export default UsersFeedbacks;