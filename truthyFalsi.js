const userEmail =  ""; //"@gmail"
if(userEmail){
    console.log("truthy value")
} else {
    console.log("falsy value")
}

//falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy value
//"0", 'false',"  ",  [], {}, function(){}

//for run array
const userName = []

if (userEmail.length ===0){
    console.log("array is empty")
}
//empty obj check
const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
console.log("Object is empty")
}
