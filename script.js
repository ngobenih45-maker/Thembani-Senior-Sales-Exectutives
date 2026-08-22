const items=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
items.forEach(i=>{
let top=i.getBoundingClientRect().top;
if(top<window.innerHeight-80)i.style.opacity=1;
});
});