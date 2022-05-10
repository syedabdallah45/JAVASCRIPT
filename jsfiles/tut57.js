console.log('this is syed tut57')

// maps in js: we can use any type of key or value
const myMap = new Map();

const key1= 'mystr', key2 ={},   key3= function(){ };

// setting map values
myMap.set(key1,'this is a string')
myMap.set(key2,'this is a blank obj')
myMap.set(key3,'this is a  empty function')
console.log(myMap);


// getting the values from a Map
// let value1 = myMap.get(key3)
// console.log(value1);

// // get the size of the Map
// console.log(myMap.size);


// // you can loop using for of to get keys and values
// for (let [key,value] of myMap){
//     console.log(key, value)
// }

// get only keys 
for (let key of myMap.keys()){
    console.log('key is', key)
}


// get only values
for (let value of myMap.values()){
    console.log('value is', value)
}


// converting map to an array 
let myArray = Array.from(myMap);
console.log('map to array is ', myArray)

// converting map keys to an Array
let mykeyArray = Array.from(myMap.keys());
console.log('map to keyarray is ', mykeyArray)


let myvalueArray = Array.from(myMap.values());
console.log('map to valuearray is ',typeof myvalueArray)
