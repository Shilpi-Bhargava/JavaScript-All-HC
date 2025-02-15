const myNums = [1,2,3,4,5,6,7,8,9,10]

 const NewNum = myNums.filter ( (num)  =>{
  num>4
}]
console.log(`${myNums} and  filtered array is ${NewNum)`)

// const coding =[ "js", "ruby", "java", "python", "cpp"]
// const values= coding.forEach (  (val) =>{
//   console.log(val)
//   return val
// }) not valid 

 const myNums = [1,2,3,4,5,6,7,8,9,10]

 const NewNums = myNums.filter ( (num)  =>{
  return num>4}
  
)
console.log(NewNums)

///Same with for Each

const newNum =[]
myNums.forEach( (num) =>{
  if(num>4){
    newNum.push(num)
  }
})
console.log(newNum)
