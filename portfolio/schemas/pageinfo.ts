import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'pageInfo',
  type: 'document',
  fields: [
    {name:"name",title:"Name",type:"string"},
    {name:"role",title:"Role",type:"string"},
    {name:"heroimage",title:"Image",type:"image",options:{hotspot:true}},
    {name:"bkInformation",title:"BKinformation",type:"string"},

    {name:"profilePic",title:"ProfilePic",type:"image",options:{hotspot:true}},
    {name:"phoneNumber",title:"PhoneNumber",type:"string"},
    {name:"addres",title:"Adress",type:"string"},
    {name:"email",title:"Email",type:"string"},
    {name:"socials",title:"Socials",type:"array",of:[{type:"reference",to:{type:"social"}}]},




   ],

  
})
