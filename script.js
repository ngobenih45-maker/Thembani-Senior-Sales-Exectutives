const items=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
items.forEach(i=>{
let top=i.getBoundingClientRect().top;
if(top<window.innerHeight-80)i.style.opacity=1;
});
});

const WA_NUMBER="27612657558";
let financeMessage="";
function calculateFinance(){
 let price=Number(document.getElementById("vehiclePrice").value||0);
 let dep=Number(document.getElementById("deposit").value||0);
 let term=Number(document.getElementById("term").value||72);
 let vehicle=document.getElementById("financeVehicle").value;
 let payment=((price-dep)/term)*1.12;
 financeMessage=`Vehicle: ${vehicle}%0AEstimated monthly payment: R${payment.toFixed(0)}`;
 document.getElementById("paymentResult").innerHTML="Estimated: R"+payment.toFixed(0)+" / month";
}
function sendFinanceWhatsApp(){
 window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Thembani, I need help with finance.\n"+financeMessage)}`);
}
