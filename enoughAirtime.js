function enoughAirtime(usage) {
  var splitString = usage.split(",");
  var total = 0;
  var airTime = 50;
  for (i = 0; i < splitString.length; i=i+1) {
    if (splitString[i] === "call") {
      total = total + 1.88;
    } else if (splitString[i] === "data") {
      total = total + 12.00;
    } else if(splitString[i] === "sms") {
      total = total + 0.75;
    }


  }
  var balance = airTime - total;
  return balance.toFixed(3);




}
console.log(enoughAirtime('call,call,call,data,sms,sms,call,data'));
