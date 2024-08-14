export interface IProject {
    name: string
    projectType: string
    description: string
    urlImage: string
    urlSite: string
    _id: string
    draft: boolean
}

export interface IPost {
    _id: string
    tldr: string
    title: string
    content: string
    draft: boolean
    coverImg: string
    smallImg: string 
    createdAt: string
    updatedAt: string
}

export interface IFeedback {
    customerName: string
    webSiteName: string
    customerFeedback: string
    projectId: string
    _id: string
}