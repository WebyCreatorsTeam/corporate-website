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

export async function getOnePost(postId: string) {
    try {
        await connectToDatabase();
        const post: IPost | null = await Post.findOne({ _id: postId });
        return post;
    } catch (error) {
        console.log(error);
    }
}