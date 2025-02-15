const myNum = [1,2,3]

const myTotal = myNum.reduce( function (acc, curval) {
  console.log(` acc ${acc} and current value ${curval} we operate acc + current value then acc turns into new value`);
  return acc + curval
  }, 0)
console.log(myTotal)


//With arrow function
const myTotal1 =  myNum.reduce( (acc, curr) => (acc+curr), 2)
console.log(myTotal1)
