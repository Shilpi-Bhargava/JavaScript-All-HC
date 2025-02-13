//fetching value from object which is in array
const coding =[
    {
  languageName: "javascript",
  langFileName: "js"
},
{ languageName:"CPP",
   langFileNAme: "CPP"
},

{
    languageName: "java",
    langfile: "jss"
}

]
coding.forEach( (items) =>{
    console.log(items.languageName)
})
