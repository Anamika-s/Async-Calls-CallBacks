// console.log("Start");
// console.log("In Between");
// console.log("End");

// console.log("Start");
// setTimeout(()=>
// {
//     console.log("In Between");

// }, 2000);
// console.log("End");

// console.log("Start");
// var numbers = [1,2,3,4,5,23,232,3,23,23,2,32,3,23,23232,22];
// numbers.forEach(item=>
//   {
//   console.log(item);
//   });
// console.log("End");

// console.log("Start");

// function getName(name)
// {
//   setTimeout(()=>
//   {
//     console.log("Inside GetName"); return name;
//   },2000);
// }
// var name = getName("Ajay");
// console.log(name);
// console.log("End");

// Callback Function 

console.log("Start");

function getName(name, callback)
{
  setTimeout(()=>
  {
    console.log("Inside GetName");  callback(name);
  },2000);
}
// var name = getName("Ajay");
// console.log(name);
// console.log("End");

 getName("Ajay", (name)=>
 {
    console.log(name);
 } );
 console.log("End");














