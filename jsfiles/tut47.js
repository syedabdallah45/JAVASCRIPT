console.log('this is syed 47')

let regex = /syed/;
// lets look into some metacharcter symbols

regex = /^syed/;
regex= /syed$/
regex =/s.ed/
regex = /s*ed/ //matches any 0 or more charcters
regex = /sy?edt?/
regex = /s\*ed/


let a = "syed is a javascript programmer ";
  
let result = regex.exec(a);
console.log('the result from exec is ', result)

if (regex.test(a)){
    console.log(`the string ${a} matches the expression ${regex.source}`)

}
else{
    console.log(`the string ${a}  does not matches the expression ${regex.source}`)
}