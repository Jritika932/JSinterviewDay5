// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

let button = document.getElementById("btn");
button.addEventListener("click", function(){
let heading = document.getElementsByTagName("h1")[0].innerText="MERN stack"
});