console.log('this is post')

// utility functions
// 1.utitlity function to get dom element from string 
function getElementFromString(string){
    let div = document.createElement('div')
    div.innerHTML = string;
    return div.firstElementChild;
}

// initialize no of parameters 
let addedParamCount = 0;


// hide the parameters box initially
let parametersBox= document.getElementById('parametersBox');
parametersBox.style.display= 'none';

// if the use clicks on params Box, hide the json box 
let paramsRadio = document.getElementById('paramsRadio');
function radio(){
    document.getElementById('requestJsonBox').style.display ='none';
    document.getElementById('parametersBox').style.display = 'block';

}

// if the user clicks on json box , hide the params box 
let jsonRadio = document.getElementById('paramsRadio');
function json(){
    document.getElementById('requestJsonBox').style.display ='block';
    document.getElementById('parametersBox').style.display = 'none';

}

// if the user clicks on + button , add more parameters 
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', ()=>{
    let params= document.getElementById('params');
    let string = `<div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
    </div>
    <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Value">
    </div>
    <button class="btn btn-primary deleteParam"> - </button>
    </div>`;
// Convert the element string to DOM node
let paramElement = getElementFromString(string);
params.appendChild(paramElement);
// add an event listener to remove the parameter on clicking - button 
let deleteParam = document.getElementsByClassName('deleteParam');
for (item of deleteParam){
    item.addEventListener('click', (e)=>{
        e.target.parentElement.remove();
    })
}
addedParamCount++;
})


let submit = document.getElementById('submit')
submit.addEventListener('click',()=>{
    document.getElementById('responsePrism').value="please wait.. fetching response......"

// fetch all the values user has entered
let url= document.getElementById('url').value;
let requestType= document.querySelector("input[name='requestType']:checked").value;
let contentType= document.querySelector("input[name='contentType']:checked").value;

// if user has used params option instead of json, collect all the parameters 
if(contentType='params'){
    data={};
    for(let i=0; i< addedParamCount+1;i++){
        if(document.getElementById('parameterkey'+ (i+1)) !=undefined){
            let key= document.getElementById('parameterKey'+(i+1)).value;
            let value= document.getElementById('parametervalue'+(i+1)).value;
            data[key]=value;
        }


    }
    data = JSON.stringify(data)
}
else{
    data=document.getElementById('requestJsonText.value')
}
console.log('url is', url)
console.log('requestType is', requestType)
console.log('content is', contentType)

// if the request type is get, invoke fetch api to create a post request
if (requestType=='GET'){
    fetch(url,{
        method:'GET',
    })
    .then(response=> response.text())
    .then((text)=>{
        document.getElementById('responsePrism').innerHTML=text;
        Prism.highlightAll();
    })
}
else{
    fetch(url, {
        method: 'POST', 
        body: data,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }  
    })
    .then(response=> response.text())
    .then((text) =>{
        // document.getElementById('responseJsonText').value = text;
        document.getElementById('responsePrism').innerHTML = text;
        Prism.highlightAll();
    });

}

});
