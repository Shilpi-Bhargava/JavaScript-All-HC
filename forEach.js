//forEach
const coding =[ "js", "ruby", "java", "python", "cpp"]
coding.forEach ( function (val){
  console.log(val)
})

//callback
coding.forEach ( (item) => {
  console.log(item);
})
//by function
function printme(item) {
  console.log(item)
}
coding.forEach(printme)

//forEach has canhave so many parameters like 
coding.forEach( (items, index, arr) =>{
console.log( items, index, arr)
})

/*output: js
ruby
java
python
cpp
=========
js
ruby
java
python
cp
============
js
ruby
java
python
cpp
=========================
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] */

=== Code Execution Successful ===

  
  
