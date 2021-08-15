console.log('hello world')

// // bject literal
// let obj = {
//     name: 'syed',
//     channel: 'code with syed',
//     address:'mars'

// }
// console.log(obj)

// callback function
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]

function enrollstudent(student, callback){
    setTimeout(function()  {
        students.push(student);
        callback();
    }, 1000);
}

function getstudents(){
    setTimeout(function() {
        let str='';
        students.forEach(function(student){
          str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML= str;
        console.log('students have been fetched');
        
    }, 3000);
}

let newstudent ={name:"Sunny", subject:"Python"}
enrollstudent(newstudent, getstudents);