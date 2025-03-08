function sayMyName(){
    console.log("Shilpi")
}//function defn

//sayMyName()//without paranthesis function name will is called function reference with (() it will be said function execution)


// function addTwoNum(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNum(1222222, 34444444)
// addTwoNum(3, null)
// addTwoNum(3, "3")
// addTwoNum

// function addTwoNum(n1, n2){
//     // let result =n1 + n2;
//     return n1+n2

// }

// function loginUserMessage(username="sam"){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))


///////////////spread methpod pass/////////////////////////////

// function calculateCartPrice (...num1){
//     return num1

// }
// console.log(calculateCartPrice(20, 40, 50, 30))


// function calculateCartPrice2 (val1, val2,val3, ...num2){
//     return num2

// }
// console.log(calculateCartPrice2(200, 400, 5000, 3000))

const user ={
    name: "shilpi",
    age: "26",
    blood: "0+"
} 

function handleObject (anyobject){
    console.log(`Username is${anyobject.name} and age is${anyobject.age}`)
}
handleObject(user)