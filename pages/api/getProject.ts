import type { NextApiRequest,NextApiResponse } from "next";
import {groq} from "next-sanity"
import { sanityClient } from "../../sanity";
import {  Projects  } from "../../typinga";
``
type Data={projects:Projects[]}

const query=groq`
*[_type=="projects"]{
  ...,
  technologies[]->
}
`
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const projects:Projects[]=await sanityClient.fetch(query)
    res.status(200).json({projects})
  }