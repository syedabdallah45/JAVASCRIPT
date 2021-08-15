console.log('ajax tutorial in one video');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('you have clicked the fetchBtn')

    // instantiate an xhr Object
    const xhr= new XMLHttpRequest();
//  open the Object

    // xhr.open('GET', 's.txt', true);

    // use this for post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

     

    // what to do in progress (optional)
    xhr.onprogress= function(){
        console.log('on progress')

    }
    // what to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)  
        }
        else{
            console.log('some error occured')
        }
        
    }
  // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);


  
    
    console.log('we are done!')
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);
function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}
