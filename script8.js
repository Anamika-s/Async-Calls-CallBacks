console.log("Fetch Api ")

// let btnFetchDetails =  document.getElementById("btnFetchDetails");
// btnFetchDetails.addEventListener('click', btnFetchDetailsFunction);

// function btnFetchDetailsFunction()
// {
//   function getData()
//   {
//     console.log("Inside getData");
  
//   url = "test.txt";
//   fetch(url).then((response)=>
//   {
//     console.log("Inside first then");
//     return response.text();
//   }).then((data)=>
//   { console.log("Inside second then") 
//     console.log(data);

//   }) 
  
// }

// function getData()
// {
//   console.log("Inside getData");

// url = "https://api.github.com/users";
// fetch(url).then((response) =>
// {
//   console.log("Inside first then");
//   return response.json();
// }).then((data)=>
// { console.log("Inside second then") 
//   console.log(data);

// }) 

// }

function getData()
{
  console.log("Inside getData");

url = "https://api.github.com/users";
fetch(url).then(response =>
response.json())
.then(data=>
  console.log(data))
}

// Post // Create

   function PostData()
   {
     url = "https://reqres.in/api/users";
     data ={
      "name": "morpheus",
      "job": "leader"
  };
  
     params={
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:data
     }
     fetch(url).then((response)=>
     {
    return response.json();
     }).then((data)=>
     {
  console.log("Record added");
      console.log(data);
     });
   }








 console.log("Before running getData");
 getData();
 console.log("After running getData");
PostData();





