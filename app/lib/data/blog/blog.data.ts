"use server"

import { IPost } from "@/app/types/interface";
import connectToDatabase from "../../mongodb";
import Post from "@/app/model/blog.model";

interface IPostDoc extends IPost {
    _doc: IPost; content: string;
}
export async function getBlog() {
    try {
        await connectToDatabase();
        const blogs: Array<IPostDoc> = await Post.find({ draft: false }).select(['-draft', '-updatedAt', '-coverImg', '-tldr']);
        const blog = blogs.reverse().map((bl) => ({ ...bl._doc, content: bl.content.replace(/(<([^>]+)>)/gi, "").slice(0, 80) }))
        return blog;
    } catch (error) {
        console.log(error);
    }
}

export async function getOnePost(postName: string) {
    try {
        // console.log(first)
        await connectToDatabase();
        const title = decodeURI(postName);
        const regex = new RegExp(title.replaceAll("-", " ").replaceAll('%3A', ':'), 'i')
        const post = await Post.findOne({ title: { $regex: regex } }).select(['-draft'])
        return post;
    } catch (error) {
        console.log(error);
        return error
        // return {}
    }
}

export async function getTitlePost(postId: string) {
    try {
        await connectToDatabase();
        const post = await Post.findById(postId).select(['title'])
        console.log(post)
        return post.title;
    } catch (error) {
        console.log(error);
        return ""
    }
}