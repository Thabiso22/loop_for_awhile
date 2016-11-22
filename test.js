var func = function(names){
  var namesStartingWithO = [];
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (names[i].startsWith('t')) {
      console.log(names[i]);
        namesStartingWithO.push(names[i])
    }
  }
  return namesStartingWithO;
}
func(['oya','thabiso','sakhi','onwa','makhosandile','thabo']);
