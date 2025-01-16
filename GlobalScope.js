let globalBar = "I am global variable";

function displayGlobalVar() {
    console.log(globalBar);
}

displayGlobalVar()

//Overusing global variables can make debugging difficult.
//Best to keep the number of global variables minimal.
