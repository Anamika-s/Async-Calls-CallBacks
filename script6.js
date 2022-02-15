console.log("Ajax Demo");

 let btn = document.getElementById("btnAdd");
 btn.addEventListener('click', buttonAddClick);
 let btn1 = document.getElementById("btnPopulateList");
 btn1.addEventListener('click', populateList);

 function buttonAddClick()
 {
    console.log("Button is clicked");
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "https://reqres.in/api/users", true);
    params = {
      "name": "morpheus",
      "job": "leader"
    };
    xhr.getResponseHeader('Content-Type' , 'application/json');

    console.log(xhr.readyState);
    xhr.onprogress = function()
    { console.log(xhr.readyState);
       console.log("In Progress");
    }

    xhr.onload = function()
    { 
       console.log(xhr.readyState); 
       console.log(xhr.responseText);
      if(xhr.status == 201)
       console.log(xhr.responseText);
       else 
       console.log("error");
    }
    
    xhr.send(params);
 }
 var xhr = new XMLHttpRequest();
  
function populateList()
{
  console.log("Inside func");
  // Instantiate xhr object
  // open the object
  xhr.open('Get', 'https://jsonplaceholder.typicode.com/comments' , true);
  console.log(xhr.readyState);
  xhr.onprogress = function()
  { console.log(xhr.readyState);
     console.log("In Progress");
  }

 // xhr.onreadystatechange = handleRequest;
 xhr.onload= function()
 {
  console.log(xhr.readyState);
  if(xhr.readyState==4 && xhr.status==200)
  {
         console.log(xhr.responseText);
         let obj = JSON.parse(xhr.responseText);
   console.log(obj);
   let list = document.getElementById("list");
   str ="";
      for(key in obj)
      {
         str+= `<li> ${obj[key].name}</li>`;
      }
      list.innerHTML = str;
 
 }
  
}
xhr.send();
}
function handleRequest()
{
  console.log(xhr.readyState);
  if(xhr.readyState==4 && xhr.status==200)
  {
         console.log(xhr.responseText);
         let obj = JSON.parse(xhr.responseText);
   console.log(obj);
   let list = document.getElementById("list");
   str ="";
      for(key in obj)
      {
         str+= `<li> ${obj[key].name}</li>`;
      }
      list.innerHTML = str;

 }
    
}