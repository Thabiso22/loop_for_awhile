const assert = require("assert");

function allFromTown(regNum, location) {


  var results = [];
  var splitString = regNum.split(",");
  for (i = 0; i < splitString.length; i++) {
    if (splitString[i].startsWith(location)) {
      results.push(splitString[i]);

    }

  }

  return results;


}


var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
console.log(fromStellies);
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');
console.log(fromKuilsriver);
assert.deepEqual(fromKuilsriver, []);
