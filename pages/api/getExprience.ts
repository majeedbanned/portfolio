import type { NextApiRequest,NextApiResponse } from "next";
import {groq} from "next-sanity"
import { sanityClient } from "../../sanity";
import {  Experience,  } from "../../typinga";
``
type Data={exprience:Experience[]}

const query=groq`
*[_type=="exprience"]{
  ...,
  technologies[]->
}
`
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const exprience:Experience[]=await sanityClient.fetch(query)
    res.status(200).json({exprience})
  }