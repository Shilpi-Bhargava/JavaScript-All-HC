//we can hold arrow function in a variable
const addTwo = (num1, num2) =>{
  return num1+num2
}
  console.log( addTwo(2 , 3))

//2. inplicit retunrn arrow function

const addTwo =(num1, num2) => (num1+num2)// agar paranthesis m wrap kiya to return ni add krna pdega 
//agar curly braces m kiya to return lgana pdega

//3.  if return object
// not allowed  ==const objectReturn = (name) =>{username:"shilpi"}

const objectReturn = () =>({username:"Shilpi"})
console.log(objectReturn)
  

