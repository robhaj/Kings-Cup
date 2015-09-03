var newDeck = shuffle(cards);
var firstHalf = (newDeck.slice(0, 26));
var secondHalf = (newDeck.slice(26,52));
var shufDeck = shuffle(deck);
var riffled = [];

var i = Math.floor(Math.random() * 26 + 1);

riffled.push(firstHalf.slice(0, i));
riffled.push(firstHalf.slice(0, firstHalf.length));
