const assert = require ("assert");
function allPaarl (regNum) {
var regNumSplit = regNum.split(",");
var results = [];
for (var i = 0 ; i < regNumSplit.length ;i++) {
if  (regNumSplit[i].startsWith("CY")) {
  console.log(regNumSplit[i]);
results.push(regNumSplit[i]);
}
}
return results;
}
allPaarl("CY 123,GP 555,CY 1234");
assert.deepEqual(allPaarl("CY 123,GP 555,CY 1234"),["CY 123","CY 1234"]);
