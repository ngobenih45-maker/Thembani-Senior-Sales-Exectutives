// Finance calculator module placeholder
// Connect this module to the main website.

function calculateVehiclePayment(price, deposit, months, rate){
  const amount = price - deposit;
  const monthlyRate = rate / 100 / 12;
  return amount * monthlyRate * Math.pow(1+monthlyRate, months) /
    (Math.pow(1+monthlyRate, months)-1);
}
