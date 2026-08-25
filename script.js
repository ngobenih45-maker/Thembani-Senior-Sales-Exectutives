document.addEventListener("DOMContentLoaded",()=>{


/* ==========================
SCROLL REVEAL
========================== */


const reveals =
document.querySelectorAll(".reveal");


function reveal(){

reveals.forEach(item=>{

const position =
item.getBoundingClientRect().top;


if(position <
window.innerHeight - 100){

item.classList.add("active");

}

});

}


window.addEventListener(
"scroll",
reveal
);


reveal();



/* ==========================
VEHICLE 3D EFFECT
DESKTOP ONLY
========================== */


const cards =
document.querySelectorAll(".vehicle-card");


if(window.innerWidth > 768){


cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const box =
card.getBoundingClientRect();


const x =
e.clientX-box.left;


const y =
e.clientY-box.top;


const rotateY =
(x-box.width/2)/20;


const rotateX =
-(y-box.height/2)/20;


card.style.transform=
`
perspective(800px)
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


}



/* ==========================
COUNTER ANIMATION
========================== */


const counters =
document.querySelectorAll(".counter");


counters.forEach(counter=>{


let started=false;


function startCounter(){


if(started)return;


started=true;


const target =
Number(counter.dataset.target);


let count=0;


const speed =
target/80;



function update(){


if(count < target){


count += speed;


counter.textContent =
Math.ceil(count);


requestAnimationFrame(update);


}

else{

counter.textContent =
target;

}


}


update();


}



window.addEventListener(
"scroll",
()=>{


const top =
counter.getBoundingClientRect().top;


if(top <
window.innerHeight){

startCounter();

}


});


});



/* ==========================
NAVBAR EFFECT
========================== */


const header =
document.querySelector("header");


window.addEventListener(
"scroll",
()=>{


if(!header)return;


if(window.scrollY>60){


header.style.boxShadow =
"0 15px 40px rgba(0,0,0,.7)";


}

else{


header.style.boxShadow =
"none";


}


});



/* ==========================
TESTIMONIAL SLIDER
========================== */


const reviews =
document.querySelectorAll(".testimonial");


if(reviews.length > 0){


let current=0;


setInterval(()=>{


reviews[current]
.classList.remove("active");


current++;


if(current >= reviews.length){

current=0;

}



reviews[current]
.classList.add("active");


},4000);


}



/* ==========================
AI VEHICLE RECOMMENDER
========================== */


window.recommend=function(){


const need =
document.getElementById("need");


const answer =
document.getElementById("answer");


if(!need || !answer)return;



let result="";


switch(need.value){


case "family":

result=
"Recommended: OMODA C5 - Spacious, safe and comfortable for family journeys.";

break;



case "luxury":

result=
"Recommended: JAECOO J7 - Premium technology, comfort and intelligent driving.";

break;



case "economy":

result=
"Recommended: OMODA Hybrid - Efficient performance and modern technology.";

break;



default:

result=
"Please select your driving preference.";

}



answer.textContent=result;


}



/* ==========================
MOBILE MENU
========================== */


const menu =
document.querySelector(".menu-btn");


const nav =
document.querySelector("nav");


if(menu && nav){


menu.addEventListener(
"click",
()=>{


nav.classList.toggle("open");


});

}



});

const leadForm =
document.getElementById("leadForm");


if(leadForm){

leadForm.addEventListener(
"submit",
function(e){

e.preventDefault();


const formData =
new FormData(leadForm);


const name =
formData.get("name");

const model =
formData.get("model");

const intent =
formData.get("intent");

const time =
formData.get("time");

const phone =
formData.get("phone");

const message =
formData.get("message");



const whatsappMessage =

`Hello Thembani, I am interested in a vehicle.

Name: ${name}

Vehicle:
${model}

Enquiry:
${intent}

Best contact time:
${time}

My number:
${phone}

Message:
${message}`;



const whatsappURL =

"https://wa.me/27612657558?text="
+
encodeURIComponent(whatsappMessage);



window.open(
whatsappURL,
"_blank"
);


});


}
const next =
document.querySelector(".next-step");

const prev =
document.querySelector(".prev-step");


const steps =
document.querySelectorAll(".form-step");


let currentStep=0;



if(next){

next.onclick=function(){

steps[currentStep]
.classList.remove("active");


currentStep++;


steps[currentStep]
.classList.add("active");

};

}



if(prev){

prev.onclick=function(){

steps[currentStep]
.classList.remove("active");


currentStep--;


steps[currentStep]
.classList.add("active");

};

}
const tradeForm =
document.getElementById("tradeIn");


if(tradeForm){

tradeForm.addEventListener(
"submit",
function(e){

e.preventDefault();


const data =
new FormData(tradeForm);


const make =
data.get("make");

const model =
data.get("model");

const year =
data.get("year");

const mileage =
data.get("mileage");



const message =

`Hi Thembani, I would like a trade-in valuation.

Vehicle Make:
${make}

Model:
${model}

Year:
${year}

Mileage:
${mileage}

Please assist me with a valuation.`;


const whatsapp =
"https://wa.me/27612657558?text="
+
encodeURIComponent(message);



window.open(
whatsapp,
"_blank"
);


});


}
"OMODA C9": {
brand:"OMODA",
price:"From R885,900*",

desc:"OMODA's flagship luxury SUV offering premium design, advanced technology and powerful turbocharged performance.",

specs:[
["192","kW turbo petrol"],
["400","Nm torque"],
["8","speed automatic"],
["660","L boot space"],
["5","Seats"],
["AWD","available"]
],

bullets:[
"2.0 TGDI turbocharged petrol engine",
"8-speed automatic transmission",
"Premium luxury SUV positioning",
"Advanced driver assistance systems",
"Large infotainment display",
"Premium cabin materials and comfort features",
"C9 SHS plug-in hybrid version available depending on market"
]
},


"JAECOO J5": {

brand:"JAECOO",

price:"From R339,900*",

desc:"A compact premium SUV combining intelligent technology, everyday practicality and modern adventure styling.",

specs:[
["115","kW power"],
["230","Nm torque"],
["7.5","L/100km"],
["51","L fuel tank"],
["5","Seats"],
["CVT","Transmission"]
],

bullets:[
"1.5 TCI turbo petrol engine",
"CVT automatic transmission",
"Wireless Apple CarPlay and Android Auto",
"13.2-inch touchscreen available on higher derivatives",
"Premium compact SUV design",
"Advanced safety and driver assistance features vary by derivative"
]
}
