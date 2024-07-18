import Projects from "../model/project.model";
import { IProject } from "../types/interface";
import connectToDatabase from "./mongodb";

export async function getProjects() {
    try {
        await connectToDatabase();
        const projects: IProject[] | null = await Projects.find({ draft: false });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return projects;
    } catch (error) {
        console.log(error);   
    }
}