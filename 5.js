// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

let button = document.getElementById("btn");
button.addEventListener("click",function(){
    let heading = document.getElementsByTagName("h1")[0];
    heading.style.display ="none";
});