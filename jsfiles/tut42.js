console.log("this is syed ")

// FETCH API
// function getdata(){
//     console.log('started getdata')
//     url='s.txt';
//     fetch(url).then((response)=>{
//         console.log('inside first then')
//         return response.text();

//     }).then((data)=>{
//         console.log('inside second then')
//         console.log(data);
//     })
// }
// getdata();


function getdata(){
    console.log('started getdata')
    url='https://api.github.com/users';
    fetch(url).then((response)=>{
        console.log('inside first then')
        return response.json();

    }).then((data)=>{
        console.log('inside second then')
        console.log(data);
    })
}
getdata();

function postdata(){
    
    url='http://dummy.restapiexample.com/api/v1/create';
    data='{"name":"harglry347485945","salary":"123","age":"23"}'
    Params ={
        method:'post',
        headers:{
            'content-type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data=>
        // console.log('inside second then')
        console.log(data)
    )
}
postdata();
