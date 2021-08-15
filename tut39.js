console.log('this is my tut')
// function func1(){
//  return new Promise(function(resolve, reject){
//     const x ='geeksforgeeks';
//     const y= 'geeksforgeeks'
//     if(x === y){
//         resolve();
//     }else {
//         reject();
//     } })
// }

// func1().then(function(){
// console.log('success, you are a geek');}).catch(function() {
// console.log('some error has occurred');});

function fun2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
           const error = true;
           if (!error){
               console.log('function: your promise has been resolved')
               resolve();
           }
           else{
               console.log('function:your promise has not been resolved')
               reject('sorry not fulfilled');
           }
            
        }, 2000);
    })

}

fun2().then(function(){
 console.log('syed:thanks for resolving')
}).catch(function(error){
    console.log('syed:very bad bro. reason:' + error)
})
