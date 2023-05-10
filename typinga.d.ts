interface SanityBody{
    _createdAt:string;
    _id:string;
    _updatedAt:string;
    _rev:string;

}

export interface Socials extends SanityBody{
    titles:string
    url:string
    _type:"social"
}

export interface PageInfo extends SanityBody{
    titles:string
    url:string
    _type:"pageInfo"
    profilePic:Image
    phoneNumber:string
    bkInformation:string
    email:string
    address:string
    name:string
    heroimage:Image
    role:string
}
export interface Technology extends SanityBody{
    _type:"skill"
    Image:Image
    progress:number
    title:string

}

export interface Skill extends SanityBody{
    _type:"skill"
    image:Image
    progress:number
    title:string

}


export interface Projects extends SanityBody{
    _type:"project"
    Image:Image
    title:string
    summery:string
    url:string
    technologies:Technology[]


}

export interface Experience extends SanityBody{
    _type:"experience"
    companyImage:Image
    company:string
    dateStarted:Date
    dateEnded:Date
    isCurrentlyWorking:boolean

    jobTitle:string
    points:string[] 
    technologies:Technology[]


}

interface image{
    _type:"image"
    asset:{
        _ref:string
        _type:"reference"
    }
}