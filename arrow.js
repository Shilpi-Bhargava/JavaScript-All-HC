const user ={
  username: "hitesh",
  price: 999,

  welcomeMessage: function() {
  console.log(`${this.username} , Welcome`)
}
}
user.welcomeMessage();
user.username="sam"
user.welcomemessage()

//this using in function which is basically not allowed

const chai = function(){
  let username ="shilpi";
  console.log(this.username);
}--//not allowed

//now advance version
//Arrow function
const chai =() =>{
  let username ="hitesh"
  console.log(this.username);
}
chai()
