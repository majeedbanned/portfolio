import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'skills',
  type: 'document',
  fields: [
    {name:"title",title:"title",description:"title of the skill", type:"string"},
    {name:"Image",title:"Image",type:"image",options:{hotspot:true}},
    {name:"progress",title:"progress",type:"number",validation:(Rule)=>Rule.min(0).max(100)}




   ],

  
})
