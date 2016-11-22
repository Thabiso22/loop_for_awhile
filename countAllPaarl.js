function countAllPaarl(regList) {
  var list = regList.split(",");
  var numberCount = [];
  var regCount = regList.startsWith("CJ");
  for (i = 0; i < list.length; i++)
    if (i === regCount) {
      //console.log(regCount[i]);
      return regCount[i];
    }




}
console.log(countAllPaarl("CJ 987-9876,CA 409-5439,CJ 932-6306"));
