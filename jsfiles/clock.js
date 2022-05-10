console.log('this is clock.js')

function updateClock(){
    let currentTime = new Date();

    // extract hours, minute and seconds from the Date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds= currentTime.getSeconds();

    // pad 0 if minute or second is less than 10 (single digit )
    currentMinutes =(currentMinutes <10 ? "0" : "") + currentMinutes;
    currentSeconds =(currentSeconds <10 ? "0" : "") + currentSeconds;

    // convert railway clock to am/pm 
    currentHour = (currentHour>12)? currentHour-12: currentHour;
    currentHour =(currentHour==0)? 12: currentHour;

    // choose am/pm as per the time of the day 
    let timeofday =(currentHour < 12)? "AM":"PM";

    // prepare the time string from hours, minutes and seconds 
    let currentTimestr =currentHour+":" + currentMinutes +":"+ currentSeconds + " "+ timeofday;

    // inset the time string inside the dom 
    document.getElementById("clock").innerHTML = currentTimestr;
    

}