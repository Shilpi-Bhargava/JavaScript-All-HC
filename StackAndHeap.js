// let myName = "Shilpi"

// let anoutherName = myName
// anoutherName = "Bhargava"

// console.log(myName)
// console.log(anoutherName)////Stack memory example

//Heap memory example

let userOne= {
    email :"sb@gmail.com",
    phone : 2567566
}

let userTwo =userOne

userTwo.email= "bhar@gmail.com"
console.log(userOne)
console.log(userTwo)