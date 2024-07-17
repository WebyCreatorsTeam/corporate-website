import Projects from "../model/project.model";
import { IProject } from "../types/interface";
import connectToDatabase from "./mongodb";

export async function getProjects() {
    try {
        await connectToDatabase();
        const projects: IProject[] | null = await Projects.find({ draft: false });
        return projects;
    } catch (error) {
        console.log(error);   
    }
}