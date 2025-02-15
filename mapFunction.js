myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const NewNum = myNums.map( (num) => num + 10)
const num1 = myNums.map( (num) => num * 10)
const num2 = myNums.map( (num) => num * 100)

//when made scope and not returning any value then undefined will show

const anyNum = myNums.map( (num) => {num-1})//this need return keword
const anyNum = myNums.map( (num) => { return 
  num-1})


console.log(NewNum)
console.log(num1)
console.log(num2)

//map chaining
const newnums = myNums.map ( (num) => num + 1 ).map( (num) => num * 10).filter( (num) => num >=40)
console.log(newnums)
