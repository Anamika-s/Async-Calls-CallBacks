console.log("Ajax Demo");

 let btn = document.getElementById("btnGetData");
 btn.addEventListener('click', buttonClicked);

 function buttonClicked()
 {
    console.log("Button is clicked");
    const xhr = new XMLHttpRequest();
    xhr.open('Get', "test.txt", true);
    console.log(xhr.readyState);
    xhr.onprogress = function()
    { console.log(xhr.readyState);
       console.log("In Progress");
    }

    xhr.onload = function()
    { console.log(xhr.readyState); 
      if(xhr.status == 200)
       console.log(xhr.responseText);
       else 
       console.log("error");
    }
    
    xhr.send();
 }

