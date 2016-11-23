const assert = require ("assert")
function countAllFromTown(regNum,location){
var splitString = regNum.split(",");
var results = [];
for (i = 0;i<splitString.length;i++){
if ( splitString[i].startsWith(location)){


results.push(splitString[i]);
}

}
return results.length;

}
console.log(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'));
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
