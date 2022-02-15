console.log("Start");

// pending
// resolve
// reject


 function func1()
 { 
   return new Promise(function(resolve, reject)
   { 
      setTimeout(()=>
      {
        const error = true;
        if(!error)
        {
      console.log("Your promise has been resolved");
      resolve();
        }
        else 
        {
           reject("some error came, promise has not been fulfilled");
        }
      }, 2000);

   });
 }

  func1().then(function()
  {
     console.log("Its resolved");
  }).catch(function(error)
  {
    console.log("Its rejected " + error);
    
  })






