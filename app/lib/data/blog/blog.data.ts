import { IPost } from "@/app/types/interface";
import connectToDatabase from "../../mongodb";
import Post from "@/app/model/blog.model";

export async function getBlog() {
    try {
        await connectToDatabase();
        const blog: IPost[] = await Post.find();
        return blog;
    } catch (error) {
        console.log(error);
    }
}

export async function getOnePost(postName: string) {
    try {
        await connectToDatabase();
        const title = decodeURI(postName)
        const post = await Post.findOne({ $text: { $search: title } }).select(['-draft'])
        return post;
    } catch (error) {
        console.log(error);
        return {}
    }
}