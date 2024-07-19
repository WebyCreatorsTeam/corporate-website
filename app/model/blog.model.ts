import mongoose, { Schema, model } from 'mongoose'

const PostSchema = new Schema({
    tldr: {
        type: String,
        require
    },
    title: {
        type: String,
        require
    },
    content: {
        type: String,
        require
    },
    draft: {
        type: Boolean,
        require
    },
    coverImg: {
        type: String,
        require
    },
    smallImg: {
        type: String,
        require
    },

}, { timestamps: true })

const Post = mongoose.models.Post || model("Post", PostSchema)
export default Post