console.log("async await")

async function hello()
{
    return "hello";
}


// console.log(hello());
hello().then(res=> console.log(res));

console.log("1")
async function Get()
{
    console.log("2")
   var res =   await fetch("http://localhost:3000/users")
   console.log("3")
   var data =  await  res.json();
   console.log(data);
}
Get().then(res=>console.log(res));
console.log("4");
console.log("end");
