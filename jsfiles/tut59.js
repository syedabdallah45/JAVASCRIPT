console.log('this is tut59')

const sym1 = Symbol('my identifier')
const sym2= Symbol('my identifier')
//  console.log('symbil is',sym1)
//  console.log('type of symbol is', typeof sym1)

console.log(sym1 === sym2)

const a= 'this is'
const b= 'this is'
console.log(a === b)
console.log(null === null)
console.log(undefined === undefined)
 
const k1 = Symbol('identifier for k1')
const k2 = Symbol('for k2')

myobj={}
myobj[k1]='syed';
myobj[k2]='harry'
myobj['name']='good boy'
myobj[4]='good int';

console.log(myobj);
console.log(myobj[k1]);
console.log(myobj[k2]);
// console.log(myobj.k2); // !! ALERT !!: cannot do this to get Rohan because it is same as myObj["k2"]


// Symbols are ignored in for in loop
for(key in myobj){
    console.log(key, myobj[key])
}