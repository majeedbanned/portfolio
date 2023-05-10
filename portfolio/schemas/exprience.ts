import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'exprience',
  title: 'Exprience',
  type: 'document',
  fields: [
    {name:"jobTitle",title:"Jobtitle",type:"string"},
    {name:"companyImage",title:"company Image",type:"image",options:{hotspot:true}},
    {name:"company",title:"Company",type:"text"},
    {name:"dateStarted",title:"dateStarted",type:"date"},
    {name:"dateEnded",title:"dateEnded",type:"date"},
    {name:"isCurrentlyWorking",title:"isCurrentlyWorking",type:"boolean"},
    {name:"points",title:"points",type:"array" ,of:[{type:"string"}]},
    {name:"technologies",title:"technologies",type:"array",of:[{type:"reference",to:{type:"skills"}}]},




   ],

  
})
