const assert = require("assert");
var totalPhoneBill = function(phoneBill) {
  var splitString = phoneBill.split(",");
  var total = 0;
  for (var i = 0; i < splitString.length; i = i + 1) {
    if (splitString[i] === "call") {
      total = total + 2.75;

    } else if (splitString[i] === "sms") {
      total = total + 0.65;
    }
  }
  return total.toFixed(2);
}
console.log(totalPhoneBill("call,sms,call,sms,sms"));
assert.equal(totalPhoneBill("call,sms,call,sms,sms"), 7.45);
