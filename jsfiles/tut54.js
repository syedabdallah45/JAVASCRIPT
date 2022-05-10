console.log('this is tut54')
const alarmSubmit = document.getElementById(('alarmSubmit'))
// add an event listener to the submit button 
alarmSubmit.addEventListener('click', setalarm);

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

function ringbell() {
    audio.play();
}
let alarm = document.getElementById('alarm');
 
alarm.addEventListener('blur', ()=>{
    console.log("alarm is blurred");
    // Validate name here
    let regex = /^([0-100])$/;
    let str = alarm.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('your name is valid');
        alarm.classList.remove('is-invalid');
      
       
    }
    else{
        console.log('your name is not valid')
        alarm.classList.add('is-invalid');
       
    }
})



// this function will run whenever alarm  is ser from the ui 
function setalarm(e) {
    e.preventDefault();
    alarmDate = new Date(alarm.value);
    console.log(`setting alarm for ${alarmDate}.....`)
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm>=0){
        setTimeout(() => {
            console.log('ringing now')
            ringbell();
        }, timeToAlarm);
    }
    
    

}

