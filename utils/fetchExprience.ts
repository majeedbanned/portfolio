import { Experience } from "../typinga";

export const fetchExperiences=async ()=>{

    const res=await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/getExprience`);

    const Data=await res.json();

    const exprience:Experience[]=Data.exprience;

    return exprience;
}