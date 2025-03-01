export interface PostItem {
    title: string;
    date: string;
    url: string;
    slug: string;
    tags: string[];
    description: string;
    author: string;
    cover?: string;
}

export interface LinkItem {
    name: string
    desc: string
    logo: string
    home: string
    contribute?: string
}


export enum ProjectTypeEnum {
    个人 = 0,
    公司
}

export interface ProjectItem {
    icon: string,
    title: string
    description: string
    url: string
    tags: Array<{
        text: string
        color: string
    }>,
    type: ProjectTypeEnum

}