// console.log('this is syed 58')

const myset = new Set();
console.log('the set looks like',myset)
let syed={name: 'syed'}
let harry= {name:'harry'}
let cavin ={
    name:'cavin'

}
// some users come multiple times
myset.add(harry)
myset.add(syed);
myset.add(syed);
myset.add(cavin)
myset.add(syed);
myset.add(harry)
console.log('the set look like this now', myset);
// set keeps only unique values
for(let user of myset){
    console.log(user.name)
}

let myset2 = new Set([1,24,'this', false,{a:4,b:5},'this'])
console.log('new set:',myset2)

console.log(myset.size);

console.log(myset2.has(24)) //check whether set has 24 or not

myset.delete('harry')
console.log('after removal',myset.has('harry'))

// myset.forEach((item)=>{
//     console.log('item is',item)
// })


// console.log('This is tutorial 58');

// // Set stores unique values
// const mySet = new Set();  // Initialize an empty set
// console.log('The set looks like :', mySet);

// // Adding values to this set
// mySet.add('this');
// mySet.add('My name');
// mySet.add('this');
// mySet.add('that');
// mySet.add(34);
// mySet.add(true);
// mySet.add(false);
// mySet.add('that2');
// console.log('The set looks like this now:', mySet);

// // Use a constructor to initialize the set
// let mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 8 }, 'this']);
// console.log('New set:', mySet2);


// console.log(mySet.size); // Get the size of the set

// console.log(mySet.has(346)); // Check whether set has 346 or not

// console.log('Before removal', mySet.has('that2'));
// mySet.delete('that2'); // Remove an element from the set
// console.log('After removal', mySet);


// // Iterating a set
// // for(let item of mySet){
// //     console.log('Item is  :', item );
// // }

// // mySet.forEach((item) => {
// //     console.log('Item is  :', item);
// // })

// // Quiz: Can you use Array.from(mySet) to convert set into an array?