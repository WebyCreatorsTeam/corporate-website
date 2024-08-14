import { getFeedbacks } from '@/app/lib/data/feedbacks/feedbacks.data'
import React from 'react'

const FeedbList = async () => {
    const feedbacks = await getFeedbacks()

    return (
        <>
            {feedbacks &&
                feedbacks.map((fdb, index) => (
                    <div key={index}>
                        <h3>{fdb.customerName}</h3>
                    </div>
                ))}
        </>
    )
}

export default FeedbList