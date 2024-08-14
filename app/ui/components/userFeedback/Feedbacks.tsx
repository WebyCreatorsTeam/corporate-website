// import axios from 'axios';
import { FC, Suspense } from 'react'
// import { API_ENDPOINT } from '../../utils/api-connect';
// import { Await, useLoaderData } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive'
import FeedbList from './FeedbList'
// import Slider from "react-slick";
// import Stars from './images/feedback/stars.svg'
// import SliderWrapper from './_SlideSliderStyle';

// interface IFeedback {
//     customerFeedback: string
//     customerName: string
//     projectId: string
//     webSiteName: string
//     _id: string
// }

const UsersFeedbacks: FC = () => {
    // const desktop = useMediaQuery({ query: '(min-width: 768px)' })
    // const { feedbacks } = useLoaderData() as { feedbacks: Array<IFeedback> }

    // const settings = {
    //     arrows: false,
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: desktop ? 2 : 1,
    //     slidesToScroll: 1,
    //     appendDots: (dots: any) => <ul>{dots}</ul>,
    //     customPaging: (i: any) => (
    //         <div className="ft-slick__dots--custom">
    //             <div className="loading" />
    //         </div>
    //     )
    // };

    return (
        <section className='elementWidth feedbacks' id="feedbacks">
            <h2>מה לקוחות אומרים עלינו?</h2>
            <Suspense fallback={<>loading</>}>
                <FeedbList />
                {/* <Await resolve={feedbacks}> */}
                {/* <div className='feedbacks__main'> */}
                    {/* <SliderWrapper> */}
                        {/* <Slider {...settings}> */}
                            {/* {[...feedbacks].reverse().map(fdb => (
                                <article key={fdb._id} dir='rtl'>
                                    <div className='feedbacks__main--feedback'>
                                        <h3>{fdb.customerName},
                                            <br /> "{fdb.webSiteName}"</h3>
                                        <img src="/images/feedback/stars.svg" alt="חמש כוכבים" loading="lazy" />
                                        <p>"{fdb.customerFeedback}"</p>
                                    </div>
                                </article>
                            ))} */}
                        {/* </Slider> */}
                    {/* </SliderWrapper> */}
                {/* </div> */}
                {/* </Await> */}
            </Suspense>
        </section>
    )
}

export default UsersFeedbacks

// export const hendleGetPFeedbacks = async () => {
//     try {
//         const { data: { continueWork, feedbacks } } = await axios.get(`${API_ENDPOINT}/feedbacks/get-feedbacks`)
//         if (continueWork) return feedbacks
//     } catch (error) {
//         console.log(error)
//     }
// }