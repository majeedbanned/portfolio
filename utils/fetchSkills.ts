import { Skill } from "../typinga";

export const fetchSkills=async ()=>{

    const res=await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/getSkills`);

    const Data=await res.json();

    const skills:Skill[]=Data.skills;

    return skills;
}