import { FC, Suspense } from 'react'
import FeedbList from './FeedbList'

const Feedbacks: FC = () => {
    return (
        <section className='elementWidth feedbacks' id="feedbacks">
            <h2>מה לקוחות אומרים עלינו?</h2>
            <Suspense fallback={<>loading</>}>
                <FeedbList />
            </Suspense>
        </section>
    )
}

export default Feedbacks