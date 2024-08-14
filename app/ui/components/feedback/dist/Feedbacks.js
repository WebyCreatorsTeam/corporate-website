"use strict";
exports.__esModule = true;
// import axios from 'axios';
var react_1 = require("react");
// import { API_ENDPOINT } from '../../utils/api-connect';
// import { Await, useLoaderData } from 'react-router-dom';
var react_responsive_1 = require("react-responsive");
var Feedbacks = function () {
    var desktop = react_responsive_1.useMediaQuery({ query: '(min-width: 768px)' });
    // const { feedbacks } = useLoaderData() as { feedbacks: Array<IFeedback> }
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: desktop ? 2 : 1,
        slidesToScroll: 1,
        appendDots: function (dots) { return React.createElement("ul", null, dots); },
        customPaging: function (i) { return (React.createElement("div", { className: "ft-slick__dots--custom" },
            React.createElement("div", { className: "loading" }))); }
    };
    return (React.createElement("section", { className: 'elementWidth feedbacks', id: "feedbacks" },
        React.createElement("h2", null, "\u05DE\u05D4 \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D0\u05D5\u05DE\u05E8\u05D9\u05DD \u05E2\u05DC\u05D9\u05E0\u05D5?"),
        React.createElement(react_1.Suspense, null,
            React.createElement("div", { className: 'feedbacks__main' }))));
};
exports["default"] = Feedbacks;
// export const hendleGetPFeedbacks = async () => {
//     try {
//         const { data: { continueWork, feedbacks } } = await axios.get(`${API_ENDPOINT}/feedbacks/get-feedbacks`)
//         if (continueWork) return feedbacks
//     } catch (error) {
//         console.log(error)
//     }
// }
