// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
setInterval(()=>{
let time = new Date()
let a = time.getHours()
let b = time.getMinutes()
let c = time.getSeconds()
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
hours.innerText = a;
minutes.innerText = b;
seconds.innerText = c;
},1000);