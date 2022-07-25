// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy

let button = document.getElementById("btn")
button.addEventListener("click",function(){
let heading = document.getElementsByTagName("h1")[0].innerText = "Welcome To Elevation Academy";
});