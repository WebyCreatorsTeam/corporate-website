import mongoose, { Schema, model } from 'mongoose'

const FeedbackSchema = new Schema({
    customerName: {
        type: String,
        require:true
    },
    webSiteName: {
        type: String,
        require: true
    },
    customerFeedback: {
        type: String,
        require: true
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Projects"
    },
})

const Feedback = mongoose.models.Feedback || model("Feedback", FeedbackSchema)
export default Feedback