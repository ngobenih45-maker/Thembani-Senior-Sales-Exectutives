const WA_NUMBER = "27612657558";

const vehicleData = {
  "OMODA C5": {
    brand:"OMODA", price:"From R329,900*",
    desc:"A sporty compact premium crossover designed around expressive styling, everyday practicality and connected comfort.",
    specs:[["115","kW max power"],["230","Nm torque"],["6.9","L/100km*"],["51","L fuel tank"],["5","Seats"],["442","L boot*"]],
    bullets:["1.5 TCI petrol engine","CVT transmission","Front-wheel drive","Wireless Apple CarPlay & Android Auto on applicable derivatives","Driver-assistance and safety features vary by derivative"]
  },
  "OMODA C7": {
    brand:"OMODA", price:"Enquire for current price*",
    desc:"A larger premium SUV blending dramatic design, intelligent technology and a choice of turbo-petrol or SHS plug-in hybrid power.",
    specs:[["145","kW petrol"],["290","Nm petrol"],["255","kW SHS*"],["525","Nm SHS*"],["105","km EV range*"],["1,200+","km combined SHS*"]],
    bullets:["1.6 TGDI + 7DCT petrol option","C7 SHS combines 1.5 TGDI with DHT hybrid system","15.6-inch 2.5K infotainment touchscreen","Wireless Apple CarPlay & Android Auto","Safety and ADAS equipment varies by derivative"]
  },
  "JAECOO J7": {
    brand:"JAECOO", price:"From R519,900*",
    desc:"An urban off-road SUV engineered for everyday luxury and confident adventure, with 2WD and AWD derivatives.",
    specs:[["145","kW max power"],["290","Nm torque"],["7","drive modes*"],["200","mm clearance*"],["584","L boot*"],["7DCT","transmission"]],
    bullets:["1.6 TGDI petrol engine","2WD or intelligent AWD depending on derivative","ARDIS drive modes on AWD derivative","18- or 19-inch wheels depending on derivative","7DCT dual-clutch transmission"]
  },
  "JAECOO J8": {
    brand:"JAECOO", price:"Enquire for current price*",
    desc:"JAECOO's flagship SUV, built around a premium cabin, strong turbocharged performance and confident all-road capability.",
    specs:[["2.0","TGDI petrol"],["7DCT","automatic"],["AWD","drive"],["6","seats*"],["Premium","cabin"],["ADAS","technology*"]],
    bullets:["2.0 TGDI turbocharged petrol powertrain","South African launch information has described a six-seat configuration","Premium curved infotainment and row-specific climate features","Final local derivative specification should be confirmed with the dealership","Availability and pricing can change"]
  }
};

function openWhatsApp(message){
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-wa]").forEach(el=>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    const type = el.dataset.wa;
    const messages = {
      general:"Hi Thembani, I found your OMODA & JAECOO sales website and I'd like some help with a vehicle.",
      testdrive:"Hi Thembani, I'd like to book a test drive. Please help me with the available OMODA & JAECOO vehicles and suitable times.",
      quote:"Hi Thembani, I'd like to request a vehicle quote. Please let me know what information you need from me.",
      finance:"Hi Thembani, I'd like to discuss finance and monthly payment options for an OMODA or JAECOO.",
      tradein:"Hi Thembani, I'd like to discuss trading in my current vehicle and getting a valuation.",
      availability:"Hi Thembani, I'd like to check current vehicle availability for an OMODA or JAECOO model."
    };
    openWhatsApp(messages[type] || messages.general);
  });
});

const nav = document.getElementById("mainNav");
document.getElementById("menuToggle")?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width = `${Math.min(100,(window.scrollY/h)*100)}%`;
},{passive:true});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const modal=document.getElementById("vehicleModal");
const modalContent=document.getElementById("modalContent");
document.querySelectorAll(".details-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const card=btn.closest(".vehicle-card");
    const model=card.dataset.model, v=vehicleData[model];
    modalContent.innerHTML=`
      <span class="modal-brand">${v.brand} · ${v.price}</span>
      <h3>${model.replace("JAECOO ","JAECOO ")}</h3>
      <p>${v.desc}</p>
      <div class="modal-specs">${v.specs.map(s=>`<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join("")}</div>
      <ul class="modal-list">${v.bullets.map(x=>`<li>${x}</li>`).join("")}</ul>
      <p class="fine-print">*Highlights only. Confirm final South African derivative specification, price, availability, finance terms and vehicle features with Thembani / OMODA & JAECOO Boksburg.</p>
      <a href="#" class="btn btn-whatsapp modal-wa">Ask Thembani About ${model} ↗</a>`;
    modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
    modal.querySelector(".modal-wa").addEventListener("click",e=>{
      e.preventDefault();
      openWhatsApp(`Hi Thembani, I'm interested in the ${model}. Please send me the latest specification, availability and pricing.`);
    });
  });
});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
document.querySelector(".modal-close").addEventListener("click",closeModal);
document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const steps=document.querySelectorAll(".form-step");
let currentStep=1;
function setStep(n){
  currentStep=n;
  steps.forEach(s=>s.classList.toggle("active",Number(s.dataset.step)===n));
  document.querySelector(".form-progress span").style.width=n===1?"50%":"100%";
  document.getElementById("formStep").textContent=`Step ${n} of 2`;
}
document.querySelector(".next-step").addEventListener("click",()=>{
  const step1=steps[0];
  const required=[...step1.querySelectorAll("[required]")];
  if(required.every(x=>x.value.trim())) setStep(2); else step1.reportValidity();
});
document.querySelector(".prev-step").addEventListener("click",()=>setStep(1));

document.getElementById("leadForm").addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const name=f.get("name"), model=f.get("model"), intent=f.get("intent"), time=f.get("time"), phone=f.get("phone"), msg=f.get("message")||"";
  const text=`Hi Thembani, my name is ${name}.
I'm interested in: ${model}.
Enquiry: ${intent}.
Best contact time: ${time}.
My WhatsApp/phone: ${phone}.
Additional details: ${msg || "None"}.
Please assist me with the next step.`;
  openWhatsApp(text);
});

document.getElementById("year").textContent=new Date().getFullYear();
