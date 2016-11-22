const assert = require("assert");

function firstPaarl(carRegList) {

  var regNumbers = carRegList.split(",");
  for (var i = 0; i < regNumbers.length; i++) {
    var regNo = regNumbers[i].trim();
    if (regNo.startsWith("CJ")) {
      console.log(regNo);
      return regNo;
    }
  }

}

var result = firstPaarl("CA 876-6789,CS 234-7521,CJ 692-3498");
assert.equal(result, 'CJ 692-3498');

//var result2 = firstPaarl("CA 876-6789,   CJ 692,CS 234-7521");
//assert.equal(result2, "CJ 692");

/*

*/
