for(let i =0; i < 11; i++){
    const element =i
    if (element ==5){
        console.log("5 is element")
    }
    console.log(element)
}

console.log(element)

for(let i =0; i <= 2; i++){
  console.log(`Outer loop value:${i}`);
    for(let j = 0; j<= 2; j++){
        console.log(`inner loop value:${j} and outer loop${i}`)
    }
    
}

for(let i =0; i <= 2; i++){
 // console.log(`Outer loop value:${i}`);
    for(let j = 0; j<= 2; j++){
       // console.log(`inner loop value:${j} and outer loop${i}`)
        console.log(i + 'x'+ j +'='+ i*j)
    }
    
}

let myArray =["shilpi", "Dhilpi", "Filpi"]
for (let i =0; i< myArray.length; i++){
    console.log(myArray[i-1])
}
