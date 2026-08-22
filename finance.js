const wa="27612657558";
function calculate(){
let p=Number(price.value||0),d=Number(deposit.value||0),m=Number(months.value||72);
result.innerHTML="Estimated monthly payment: R"+(((p-d)/m)*1.12).toFixed(0);
}