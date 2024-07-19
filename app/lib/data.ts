import Projects from "../model/project.model";
import { IProject } from "../types/interface";
import connectToDatabase from "./mongodb";

export async function getProjects() {
    try {
        await connectToDatabase();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const projects: IProject[] | null = await Projects.find({ draft: false });
        return projects;
    } catch (error) {
        console.log(error);   
    }
}

export async function getOneProject(projectId: string) {
    try {
        await connectToDatabase();
        const project: IProject | null = await Projects.findOne({ _id: projectId });
        return project;
    } catch (error) {
        console.log(error);   
    }
}