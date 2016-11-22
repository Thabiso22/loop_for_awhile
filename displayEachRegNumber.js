const assert = require ("assert");
function displayEachRegNumber(regList) {
var results = regList.split (",");
for (var i = 0; i < results.length; i++) {
console.log(results[i]);
}
return results[i];


}
displayEachRegNumber("CA 333-4321,CF 321-4325,GP 432-8765");
assert.equal(displayEachRegNumber("regList[i]"));
