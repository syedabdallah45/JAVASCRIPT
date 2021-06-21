// let count;
// console.log(count);
// count=10;
// console.log(count);
//   // 1.ways to print in js
//   console.log("hello world");
//   alert('me')
//   document.write("this is phone")
//    // 2.js console api
//   console.warn("this is warning")
//   console.error("this is an error")
//   console.clear();
//   console.assert()

//   3.js variables
// containers to store data values
// var number1=34;
// var number2=56;
// console.log(number1+number2);

// // 4.data types in js
// // 1.string
// var str1='this is a string'
// var str2="this is also a string"
// console.log(str1+str2)
// // 2.numbers
// var num1=34;
// var num2=45;
// console.log(num1+num2)
// //  3.objects
// var marks={
//     syed:34,
//     maha:45,
    
// }
// console.log(marks)


// // boolen types
// var a= true;
// var b= false;
// console.log(a)

// // var und=undefined
// var und;
// console.log(und);
// null
// var n=null;
// console.log(n);

// at a very high level, there are two types of data types in js
// 1.primitive data types:undefined, null, num, string,boolen,symbol
// 2.reference data types:  arrays, objects, functions

// var arr=[1,2,3,4,5];
// console.log(arr);
// console.log(arr[0]);

// function in js
// function avg(a,b){
//     c=(a+b)/2;
//     return c;
// }
// c1=avg(4,6);
// c2=avg(14,3);
// console.log(c1,c2);

// conditionals in js

// var age=34;
// // if-else statement
// if (age>35){
//     console.log('you are a kid')
// }
// else{
//     console.log('you are not a kido')

// }
// if else ladder
// if(age>34){
//     console.log("you are not a kid")
// }
// else if(age>44){
//     console.log("you are just  not a kid")
// }
// else if(age>54){
//   console.log("yes you are just not a kid")
// }
// else if(age>35){
//     console.log("18 you are just not a kid")
// }
// else{
//     console.log("just a kid")
// }
// console.log("end of ladder")

// for loop
// var arr=[1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element) {
//     console.log(element);
    
// })

// let j=0;

// while(j<arr.length){
// console.log(arr[j])
// j++
// }


// do{
//     console.log(arr[j]);
//     j++;

// }while(j < arr.length);

// array methods
// let myarr = ['fan','camera',34,null,true];
// Array methods
// console.log(myarr.length)
// myarr.pop();
// myarr.push('harry');
// myarr.shift();
// const newlen=myarr.unshift('harry');
// console.log(newlen);
// console.log(myarr);
// myarr.toString();
// var d=[1,2,4,56,23,3233]
// d.sort();
// console.log(d);

// let fruits=['apple','banana','grapes']
// console.log(fruits.length);
// console.log(fruits[2]);
// fruits.splice(pos,1);
// console.log(fruits);

// functions
// function print(){
//     console.log('inside print');

// }
// function anotherprint(){
//     console.log('inside anotherprint');
//     print();
// }
// anotherprint();

// using func parameters and return keyword
// function add(a,b){
//     console.log(a+b);

// }
// add(2,3);

// function add(a,b){
//     return(a+b)
// }
// // let result=add(2,4);
// console.log(add(2,3));

// function printnumber(number1,number2){
//     var max = number1;
//     if (number2>number1)
//     max=number2;
//     console.log('maximal number:'+ max)
// }
// printnumber(-5,-10);
// printnumber(3,6);

// function printarugement(){
//     for(var i in arguments){
//         console.log(arguments[i]),
//     }
// }

// let fruits=['apple','banana']
// fruits.push('ornage')
// fruits.splice(0,1)
// console.log(fruits.length);
// console.log(fruits)

// var numbers=[];
// console.log('numbers array is'+ numbers)

//  let numbers=[1,2,3,4,5];
//  console.log(numbers);

//  let fruits=['apple','banana','grapes']
//  flen=fruits.length;
//  console.log('no of elements in array objects fruits'+flen)
//  console.log(fruits);
//  console.log(indexof[0]);

// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// console.log(fruits instanceof Array);

//  let cars= new Array('ford','toyota','tata')
//  cars.push('hyundai');
//  cars[1]='honda';
//  console.log(cars[1])
//  console.log(typeof cars);
//  console.log(cars);
// console.log(cars.length);

// let i;
// for(i in cars){
//     console.log(i,cars[i]);

// }
// splice 
// const numbers=[1,2,3,1,4]
// numbers.slice()
// numbers.splice(2,0, 'a','b')
// numbers.splice(1,0,'a','b');
// numbers.splice(0,1);
// console.log(numbers.indexOf(1,2));
// console.log(numbers.lastindexof(1));
// console.log(typeof numbers)
// console.log(Array.isArray(numbers));
// console.log(numbers);

// var fruits=['banana','apple','grapes','mango']
// console.log(fruits.toString)

// for(x of fruits){
//     console.log(x)
// }
// for(i in fruits){
//     console.log(i,fruits[i])
// }

// js const cannot be reassigned
// const p=3.45;
//  p=4.4;
// console.log(p)

// explains the const contains the block scope
// const x=22;{
//     const x=56;
//     console.log(x);
//     {
//         const x=99
//         console.log(x)
//     }
//     {
//         const x=34;
//         console.log(x)
//     }
// }
// console.log(x)

// let i=5;

// while(i < 5){
//     console.log('Hello World');
//     i=i+1;


// for (let i = 0; number < 5; i++) {
//     console.log('Hello World !');
// }

// let hours =10;

// if (hours >= 12 && hours < 6){
// console.log("Good Morning !");
// }
// else{
//     console.log('good afternon')
// }

// let mylovestring ="harry is a good boy good good";
// console.log(mylovestring.length) 
// console.log(mylovestring.indexOf("good"))
// console.log(mylovestring.lastIndexOf("good"))
// console.log(mylovestring)

// console.log(mylovestring.slice(2,23))
// d= mylovestring.replace("harry","syed")
// console.log(d,mylovestring)

// dates in javascript
// let mydate = new Date();
// console.log(mydate.g)

// DOM manipulation
// let elem= document.getElementById("click")
// console.log(elem);

// let elemclass=document.getElementsByClassName("container")
// console.log(elemclass);
// elemclass[0].style.background= "yellow"
// elemclass[0].classList.remove("bg-primary")
// elemclass[0].classList.add("text-success")
// console.log(elemclass[0].innerHTML)

// tn=document.getElementsByTagName('div')
// console.log(tn)

// createdElement= document.createElement('p');
// createdElement.innerText="this is good whether";
// tn[0].appendchild(createdElement);

// sel=document.querySelectorAll(".container")
// console.log(sel)

// function funcname(param1,param2){
//   statement
// }
// function myfunction(){
//   console.log('this is a small function.')
// }
// myfunction();

// you can call afunction from another function.
// function print(){
//   console.log('inside print')
// }
// function anotherprint(){
//   console.log('inside anotherprint')
//   print();

// }
// anotherprint()
 
// function functionname(arg1,arg2)
// finding the max value
// findmax=(1,45,6,7,87)
// function findmax(){
//   let max = -Infinity
//   for(let i=0;i<arguments.length;i++){
//       if(arguments[i]>max){
//           max=arguments[i];
//       }
//   }
//   // return max;
// }
// console.log(findmax)
// using function parameters and returns keyword.
// function add(a,b){
//   console.log(a+b)
//   return (a+b)
// }
// add(2,3);

// function add(a,b){
//   return(a+b) 
// }

// let result=add(2,4)
// console.log(add(2,4));

// function printnumber(number1,number2){
//   var max=number1
//   if(number2>number1);
//   max=number2
//   console.log('maximal number:' +max)
// }
// printnumber(100,200)

// function clicked(){
//   console.log('the button was clicked')
// }
// window.onload=function(){
//   console.log('the document was loaded')
// }
// events in javascript
//  firstcontainer.addEventListener('click', function(){
//    console.log("click hua")
//  })

//  firstcontainer.addEventListener('mouseover', function(){
  // console.log("mouse on container ")
// })

// firstcontainer.addEventListener('mouseout', function(){
//   console.log("clicked hua")
// })
let prevHTML= document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup', function(){
  document.querySelectorAll('.container')[1].innerHTML= prevHTML 
  console.log("mouseup when clicked on contianer")
})

firstcontainer.addEventListener('mousedown', function(){
  document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked<b> "
  console.log("mouse down when clicked on container")
})