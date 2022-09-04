export interface Skills {
    id: number
    skill: string
}
export interface Category {
    id: number
    category: string
}
export interface Skill {
    id: number;
    skill: string;
}

export interface ResponseCategory {
    id: number;
    category: string;
}

export interface User {
    id: number;
    fido: string;
    position: string;
    previousPlace: string;
    level: string;
    salary: number;
    about: string;
    skills: Skill[];
    responseCategory: ResponseCategory;
}