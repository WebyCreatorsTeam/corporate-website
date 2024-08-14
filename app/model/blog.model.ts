import mongoose, { Schema, model } from 'mongoose'

const PostSchema = new Schema({
    tldr: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    draft: {
        type: Boolean,
        require: true
    },
    coverImg: {
        type: String,
        require: true
    },
    smallImg: {
        type: String,
        require: true
    },

}, { timestamps: true }).index({ title: 'text' })

const Post = mongoose.models.Post || model("Post", PostSchema)
export default Post