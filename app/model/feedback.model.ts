import mongoose, { Schema, model } from 'mongoose'

const FeedbackSchema = new Schema({
    customerName: {
        type: String,
        require
    },
    webSiteName: {
        type: String,
        require
    },
    customerFeedback: {
        type: String,
        require
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Projects"
    },
})

const Feedback = mongoose.models.Feedback || model("Feedback", FeedbackSchema)
export default Feedback