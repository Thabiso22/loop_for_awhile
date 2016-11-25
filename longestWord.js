function longestWord(sentence) {

  var longest = sentence.split(" ");
  // var results = "";
  var Lword = 0;
  var Laddress = 0;
  for (i = 0; i < longest.length; i++) {
    var firstLong = longest[i];
    if (firstLong.length > Lword) {
      Lword= firstLong.length;
      Laddress = i;

    }
  }
  return longest[Laddress];
}
console.log(longestWord("I am coding"));
