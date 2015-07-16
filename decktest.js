// Create array "deck" containing each card object
var deck = [
  {rank: 1, unicode: "🂡"}, {rank: 1, unicode: "🂱"},
  {rank: 1, unicode: "🃁"}, {rank: 1, unicode: "🃑"},
  {rank: 2, unicode: "🂢"}, {rank: 2, unicode: "🂲"},
  {rank: 2, unicode: "🃂"}, {rank: 2, unicode: "🃒"},
  {rank: 3, unicode: "🂣"}, {rank: 3, unicode: "🂳"},
  {rank: 3, unicode: "🃃"}, {rank: 3, unicode: "🃓"},
  {rank: 4, unicode: "🂤"}, {rank: 4, unicode: "🂴"},
  {rank: 4, unicode: "🃄"}, {rank: 4, unicode: "🃔"},
  {rank: 5, unicode: "🂥"}, {rank: 5, unicode: "🂵"},
  {rank: 5, unicode: "🃅"}, {rank: 5, unicode: "🃕"},
  {rank: 6, unicode: "🂦"}, {rank: 6, unicode: "🂶"},
  {rank: 6, unicode: "🃆"}, {rank: 6, unicode: "🃖"},
  {rank: 7, unicode: "🂧"}, {rank: 7, unicode: "🂷"},
  {rank: 7, unicode: "🃇"}, {rank: 7, unicode: "🃗"},
  {rank: 8, unicode: "🂨"}, {rank: 8, unicode: "🂸"},
  {rank: 8, unicode: "🃈"}, {rank: 8, unicode: "🃘"},
  {rank: 9, unicode: "🂩"}, {rank: 9, unicode: "🂹"},
  {rank: 9, unicode: "🃉"}, {rank: 9, unicode: "🃙"},
  {rank: 10, unicode: "🂪"}, {rank: 10, unicode: "🂺"},
  {rank: 10, unicode: "🃊"}, {rank: 10, unicode: "🃚"},
  {rank: 11, unicode: "🂫"}, {rank: 11, unicode: "🂻"},
  {rank: 11, unicode: "🃋"}, {rank: 11, unicode: "🃛"},
  {rank: 12, unicode: "🂭"}, {rank: 12, unicode: "🂽"},
  {rank: 12, unicode: "🃍"}, {rank: 12, unicode: "🃝"},
  {rank: 13, unicode: "🂮"}, {rank: 13, unicode: "🂾"},
  {rank: 13, unicode: "🃎"}, {rank: 13, unicode: "🃞"}    
  ];

// Shuffle Deck into new array "shufDeck"

var shufDeck = (_.shuffle(deck));

// Styling function using DOM manipulation

function addText(message) {

  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(message);
  var parent = document.getElementById("someId");

  newDiv.setAttribute("class", "card");
  newDiv.appendChild(newContent);
  parent.appendChild(newDiv)

}

// Pull first card in array and call styling function "addText"

function cardDiscard() {

    var picked = shufDeck[0].unicode;
    var x = shufDeck.shift();

    addText(picked);

    return x;

}

function showCard(){

    var msg = (playRound(cardDiscard().rank));
    var k = document.createTextNode(msg);
    var j = document.getElementById("someId");

    j.appendChild(k);

};

//Function checking card's rank with switch statement for output

function playRound(rank) {

  var result = "";

  switch(rank) {

    case 1:
      result = "Waterfall";
      break;

    case 2:
      result = "Pick two people, and make them drink.";
      break;

    case 3:
      result = "Three is me, take 3 drinks.";
      break;

    case 4:
      result = "Take 2 drinks, give out 2.";
      break;

    case 5:
      result = "Set a rule to follow.";
      break;

    case 6:
      result = "Thumb rule - Place a thumb on the table, last person to do so drinks.";
      break;

    case 7:
      result = "Hand to heaven, last person to do so drinks.";
      break;

    case 8:
      result = "Choose a mate, every time they drink, you drink.";
      break;

    case 9:
      result = "Rhyme time - Pick a word, everyone rhymes against it, if you get stumped you drink.";
      break;

    case 10:
      result = "Categories, pick a category, if you get stumped..you drink.";
      break;

    case 11:
      result = "Dudes drink...";
      break;

    case 12:
      result = "Ladies drink...";
      break;

    case 13:
      result = "King, if it isn't the last king, add to kings cup. If last King, drink kings cup.";
      break;

  }

  return result;

};
