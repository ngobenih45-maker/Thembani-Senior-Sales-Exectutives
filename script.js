// Scroll reveal animation

const reveals =
document.querySelectorAll(".reveal");


function reveal(){

reveals.forEach(item=>{

let windowHeight =
window.innerHeight;

let top =
item.getBoundingClientRect().top;


if(top < windowHeight - 100){

item.classList.add("active");

}

});

}


window.addEventListener(
"scroll",
reveal
);

reveal();




// Vehicle 3D movement

document
.querySelectorAll(".vehicle-card")
.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let rect =
card.getBoundingClientRect();


let x =
e.clientX - rect.left;


let y =
e.clientY - rect.top;


let rotateY =
(x-rect.width/2)/15;


let rotateX =
-(y-rect.height/2)/15;


card.style.transform=
`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-15px)
`;

});


card.addEventListener(
"mouseleave",
()=>{

card.style.transform="";

});

});




// Animated counters

const counters =
document.querySelectorAll(".counter");


counters.forEach(counter=>{


let target =
+counter.dataset.target;


let count=0;


let speed=
target/100;


function update(){

if(count < target){

count+=speed;

counter.innerHTML=
Math.ceil(count);

requestAnimationFrame(update);

}

else{

counter.innerHTML=target;

}

}


update();


});




// Navbar shadow

window.addEventListener(
"scroll",
()=>{

let nav =
document.querySelector("header");


if(window.scrollY>50){

nav.style.boxShadow=
"0 10px 40px #000";

}

else{

nav.style.boxShadow="none";

}

});
let reviews =
document.querySelectorAll(".testimonial");


let current=0;


setInterval(()=>{

reviews[current].classList.remove("active");


current++;

if(current>=reviews.length)
current=0;


reviews[current].classList.add("active");


},4000);
function recommend(){

let choice =
document.getElementById("need").value;


let result="";


if(choice==="family"){

result="Recommended: OMODA C5 - Spacious, safe and comfortable.";

}

else if(choice==="luxury"){

result="Recommended: JAECOO J7 - Premium technology and style.";

}

else if(choice==="economy"){

result="Recommended: OMODA C5 Hybrid - Efficient and modern.";

}

else{

result="Please select your driving needs.";

}


document.getElementById(
"answer"
).innerHTML=result;


}
document.querySelector(".menu-btn")
.onclick=function(){

document.querySelector("nav")
.classList.toggle("open");

}
