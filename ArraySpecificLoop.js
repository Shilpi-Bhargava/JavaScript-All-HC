//for of

//[" ", "", ""]
//[{}, {}, {}]

const arr =[1,2,3,4]
for(const i of arr){
    console.log(i)
}

const greeting ="Hello Shilpi!!!"
for( const i of greeting){
    if(i==" "){
        continue
    }
    console.log(`Each char is ${i}`)
}
