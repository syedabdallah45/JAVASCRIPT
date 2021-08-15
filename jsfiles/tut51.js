console.log('this file is tutorial 51')

function fruitsiterator(values){
    let nextindex=0;
    // we will return an Object
    return{
        next:function(){
            if (nextindex < values.length){
            //  we will return below Object
            return{
                value: values[nextindex++],
                done:false

            }
        }
            else{
                // we will return below object with only done
                return{
                    done:true
                }
            }
        }
    }
}

const myarray =['apples','grapes','ornages','papaya']
console.log('my array is',myarray)

// using the iterator
const fruits = fruitsiterator(myarray)
console.log(fruits.next().value)
