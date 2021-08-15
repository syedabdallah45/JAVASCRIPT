console.log('this is syed abdallah')

let reg=/syed/; //This is a regular ecpression literal in js
reg =/syed/g; //g means global

// reg= /syed/i; //i means case insensitive

// console.log(reg);
// console.log(reg.source);

let s= 'this is great code with syed and also syed bhai'
// functions to match expressions
// 1.exec() - this function will return  an array for match or null for no match 
let result = reg.exec(s);
console.log(result)
result=reg.exec(s);
console.log(result);

if (result){
    console.log(result);
    console.log(result.input);
    console.log(result.index)
}



// 2.test()
let result2 =reg.test(s);
// console.log(result2); ==This will only print true if the  "reg is there in the string s"


/// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg) // ---> This is right
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5);


 

