https://www.programiz.com/online-compiler/7ZzNuKGamc0BQ
function login(username ="sam"){
    if(username===undefined){
        console.log("Please enter a username")
        return
        
    }
    return `${username} just logged in`;
}
console.log(login("ko"))

//rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1 
}
console.log(calculateCartPrice(200,300,400, 5))
//Can pass object in function like:
function handleObject(anyObject){
    console.log(`username is${anyObject.username}price is ${anyObject.price}`)
}

handleObject({
    username:"shilpi",
    price:9
})

//Passing array in function
const myArray =[200,300,400,50]

function returnSecondNumber(getArray) {
    return getArray[1]
    
}

console.log(returnSecondNumber(myArray))

console.log(returnSecondNumber([100, 200, 300]))
