// Singleton

let mySym =Symbol("Key1")

//object literals
const Juser ={
    name: "shilpi",
    "FullName": "Bhargava",
    [mySym]:"mySym",
    Age: 25,
    Location: "Jaipur",
    Status: "Emplyoed",
    isLoggedIn: false,
    lastLogin:["Mon", "Tues", "Wen"]
}

console.log(Juser.name)
console.log(Juser["name"])
console.log(Juser["FullName"])
console.log(Juser[mySym])


