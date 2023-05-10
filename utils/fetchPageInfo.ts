import pageinfo from "../portfolio/schemas/pageinfo";
import { PageInfo } from "../typinga";

export const fetchPageInfo=async ()=>{

    const res=await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/getPageInfo`);

    const Data=await res.json();

    const pageInfo:PageInfo[]=Data.pageInfo;

    return pageInfo;
}