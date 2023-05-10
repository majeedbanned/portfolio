import {defineField, defineType, validation} from 'sanity'

export default defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
    {name:"title",title:"title",description:"platform for social media", type:"string"},
    {name:"url",title:"url",type:"url"},




   ],

  
})
