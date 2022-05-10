console.log('this is syed 52')

// generators in js 

function* numbersgen(){
    let i =0;
    while(true){
        yield i++;
    }
}

const gen= numbersgen();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)