studentArray = ["Alex", "Amber", "Ashley", "Ben", "Bradley", "Brandon", "Charles", "Chip", "Crystal", "Dominic", "Erik", "Ethan", "Jeff", "Johnny", "Keith", "Kierston", "Kyle", "Lance", "Lucy", "Luis", "Patrick", "Pete", "Robert", "Ryan", "Sarah", "Suhayl", "Yusef", "Zoe"];

function shuffle(studentArray) {
  var wrk = studentArray.slice(0);
  var shuffled = [];
  while (wrk.length > 0) {
    if (wrk.length === 1) {
      shuffled.push(wrk[0]);
      break;
    }
    else {
      var i = Math.floor(Math.random() * wrk.length);
      shuffled.push(wrk.splice(i, 1)[0]);
    }
  }
  return shuffled;
}

var x = shuffle(studentArray);

function chunk(shufArray, num) {
    var tempArray = shufArray.slice();
    var chunky = [];
    for (i=0; i<=tempArray.length/num; i++) {

    chunky.push(shufArray.splice(0, num));

}
return chunky;
}
