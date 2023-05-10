import { Socials } from "../typinga";

export const fetchSocials=async ()=>{

    const res=await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/getSocial`);

    const Data=await res.json();

    const socials:Socials[]=Data.socials;

    return socials;
}