import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {name:"title",title:"title",description:"title of the project", type:"string"},
    {name:"Image",title:"Image",type:"image",options:{hotspot:true}},
    {name:"summery",title:"summery",type:"text"},
    {name:"link",title:"link",type:"url"},
    {name:"technologies",title:"technologies",type:"array",of:[{type:"reference",to:{type:"skills"}}]},




   ],

  
})
