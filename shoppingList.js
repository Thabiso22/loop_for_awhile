const assert =  require ("assert");
function shoppingList(str) {
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].trim());
  }
}
shoppingList('1x bread,6x hotdog rolls,2x tubs of margarine');
assert.equal(shoppingList('1x bread,6x hotdog rolls,2x tubs of margarine'),true);
