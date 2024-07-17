import mongoose, { Schema, model } from 'mongoose'

const ProjectSchema = new Schema({
    urlImage: {
        type: String,
    },
    name: {
        type: String,
        require: [true, "שם הפרויקט חייב להיות מלא"],
    },
    description: {
        type: String,
        require: [true, "תיאור הפרויקט חייב להיות מלא"],
    },
    urlSite: {
        type: String
    },
    draft: {
        type: Boolean,
        default: true
    },
    customerFeedback: {
        type: Schema.Types.ObjectId,
        ref: "Feedback"
    }
})

const Projects = mongoose.models.Projects || model("Projects", ProjectSchema);
export default Projects