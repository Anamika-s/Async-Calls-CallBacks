const students = [
  {name:"Deepak", subject:"Maths"},
  {name:"Ajay", subject:"English"}
];


function EnrollStudent(student , callback)
{  
  return new Promise(function (resolve, reject)
  {
    setTimeout(()=>
    {
           students.push(student);
           console.log("Student is enrolled");
           const error=false;
            if(!error)
           resolve();
           else 
           reject ("some error came");
    }, 3000);

  })
    }

function GetStudents()
{
    setTimeout(()=>
    {
       let str ="";
       students.forEach((student) =>
       {
          str += `<li>${student.name}</li>`;

       }
       );
       document.getElementById("list").innerHTML = str;
       console.log("Students Records are fetched");
    }, 1000);
}

let newStudent = {name:"Lalit" , subject:"Science"};
//EnrollStudent(newStudent , GetStudents);
 EnrollStudent(newStudent).then(function()
 { 
      GetStudents();
 }
 ).catch(function(error)
 {
    console.log(error);
 })
 
// GetStudents();







