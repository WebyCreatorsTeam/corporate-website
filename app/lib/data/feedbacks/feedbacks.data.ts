// Feedback
// IFeedback
import connectToDatabase from "../../mongodb";
import Feedback from "@/app/model/feedback.model";
import { IFeedback } from "@/app/types/interface";

export async function getFeedbacks() {
    try {
        await connectToDatabase();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const allFeedbacks: IFeedback[] | null = await Feedback.find({});
        const feedbacks = allFeedbacks.reverse()
        return feedbacks;
    } catch (error) {
        console.log(error);
        return []
    }
}