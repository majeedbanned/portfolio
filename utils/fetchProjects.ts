import { Projects } from "../typinga";

export const fetchProjects=async ()=>{

    const res=await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/getProject`);

    const Data=await res.json();

    const projects:Projects[]=Data.projects;

    return projects;
}