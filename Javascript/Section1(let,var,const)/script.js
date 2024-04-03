// var, let and const

// scope- a region in a program where variables are recognized, beyond that it is not 
// recognized
// example 1

var a = 5;
console.log(a)

{
  var b = 6;
  console.log(a,b)
}
console.log(b)
//o/p is  5 5 6 6 , here var is attached to the global scope 
// and can be accessed even out side the block scope
// simmilarly a can be accessed inside the block scope

let c = 7;

{
  console.log(c)
}