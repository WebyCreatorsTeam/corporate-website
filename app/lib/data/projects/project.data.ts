import { IProject } from "@/app/types/interface";
import connectToDatabase from "../../mongodb";
import Projects from "@/app/model/project.model";

export async function getProjects() {
    try {
        await connectToDatabase();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const allProjects: IProject[] | null = await Projects.find({ draft: false });
        const projects = allProjects.reverse().slice(0, 4)
        return projects;
    } catch (error) {
        console.log(error);
        return []
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