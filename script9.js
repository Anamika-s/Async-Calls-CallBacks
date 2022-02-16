console.log("Async Await Demo")

async function hello()
{ 
   console.log("Inside hello");
   const response = await fetch("https://api.github.com/users");
   console.log("before response");
   const users = await response.json();
   console.log("after response");
   return users;
}

console.log("Before calling hello");
let a = hello();
console.log("After calling hello");
console.log(a);
a.then(data=>console.log(data));
//a.catch({});
console.log("This is last line of this file")