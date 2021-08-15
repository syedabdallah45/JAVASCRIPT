console.log('this is syed abdallah')


const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail= false;
let validphone=false;
let validuser =false;
$('#failure').hide();
$('#success').hide();



// console.log(name, email, phone)
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validuser= true;
    }
    else{
        console.log('your name is not valid')
        name.classList.add('is-invalid');
        validuser = false;
    }
})

email.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail= true;
    }
    else{
        console.log('your email is not valid')
        email.classList.add('is-invalid');
        validEmail = false;

    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate name here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your phone no. is valid');
        phone.classList.remove('is-invalid');
        validphone= true;
    }
    else{
        console.log('your phone no. is not valid')
        phone.classList.add('is-invalid');
        validphone = false;
    }
})


let submit= document.getElementById('submit')
submit.addEventListener('click', (e)=>{
    
    e.preventDefault();
    console.log('you clicked on submit');

    console.log(validEmail, validuser, validphone);
     
if(validEmail && validuser && validphone){
    
    let failure = document.getElementById('failure');
     let html= '';
    console.log('Phone, email and user are valid. Submitting the form');
    
    let success = document.getElementById('success');
    success.classList.add('show');
    // failure.classList.remove('show');
    // $('#failure').alert('close');
    $('#failure').hide();
    $('#success').show();
    
}
else{
    console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
    let html = '';
    let failure = document.getElementById('failure');
    failure.classList.add('show');
    // success.classList.remove('show');
    // $('#success').alert('hide');
    $('#success').hide();
    $('#failure').show();
    }

})