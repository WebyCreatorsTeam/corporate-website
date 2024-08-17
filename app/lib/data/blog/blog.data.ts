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
        await connectToDatabase();
        const title = decodeURI(postName);
        console.log(title)
        // const text = title.replaceAll('%3A', ':').replaceAll('-', ' ')
        const regex = new RegExp(title.replaceAll("-", " ").replaceAll('%3A', ':'), 'i')
        // console.log(text)
        const post = await Post.findOne({ title: { $regex: regex } }).select(['-draft'])
        console.log(post)
        return post;
    } catch (error) {
        console.log(error);
        return {}
    }
}