"use strict";
var deck = [
{
  rank:1,
  unicode: "🂡"
},

{
  rank:1,
  unicode: "🂱"
},
{
  rank:1,
  unicode: "🃁"
},
{
  rank:1,
  unicode: "🃑"
},
{
  rank:2,
  unicode: "🂢"
},
  {
  rank:2,
  unicode: "🂲"
},
  {
  rank:2,
  unicode: "🃂"
},
  {
  rank:2,
  unicode: "🃒"
},
  {
  rank:3,
  unicode: "🂣"
},
  {
  rank:3,
  unicode: "🂳"
},
  {
  rank:3,
  unicode: "🃃"
},
  {
  rank:3,
  unicode: "🃓"
},
  {
  rank:4,
  unicode: "🂤"
},
  {
  rank:4,
  unicode: "🂴"
},
  {
  rank:4,
  unicode: "🃄"
},
  {
  rank:4,
  unicode: "🃔"
},
  {
  rank:5,
  unicode: "🂥"
},
  {
  rank:5,
  unicode: "🂵"
},
  {
  rank:5,
  unicode: "🃅"
},
  {
  rank:5,
  unicode: "🃕"
},
  {
  rank:6,
  unicode: "🂦"
},
  {
  rank:6,
  unicode: "🂶"
},
  {
  rank:6,
  unicode: "🃆"
},
  {
  rank:6,
  unicode: "🃖"
},
  {
  rank:7,
  unicode: "🂧"
},
  {
  rank:7,
  unicode: "🂷"
},
  {
  rank:7,
  unicode: "🃇"
},
  {
  rank:7,
  unicode: "🃗"
},
  {
  rank:8,
  unicode: "🂨"
},
  {
  rank:8,
  unicode: "🂸"
},
  {
  rank:8,
  unicode: "🃈"
},
  {
  rank:8,
  unicode: "🃘"
},
  {
  rank:9,
  unicode: "🂩"
},
  {
  rank:9,
  unicode: "🂹"
},
  {
  rank:9,
  unicode: "🃉"
},
  {
  rank:9,
  unicode: "🃙"
},
  {
  rank:10,
  unicode: "🂪"
},
  {
  rank:10,
  unicode: "🂺"
},
  {
  rank:10,
  unicode: "🃊"
},
  {
  rank:10,
  unicode: "🃚"
},
  {
  rank:11,
  unicode: "🂫"
},
  {
  rank:11,
  unicode: "🂻"
},
  {
  rank:11,
  unicode: "🃋"
},
  {
  rank:11,
  unicode: "🃛"
},
  {
  rank:12,
  unicode: "🂭"
},
  {
  rank:12,
  unicode: "🂽"
},
  {
  rank:12,
  unicode: "🃍"
},
  {
  rank:12,
  unicode: "🃝"
},
  {
  rank:13,
  unicode: "🂮"
},
  {
  rank:13,
  unicode: "🂾"
},
  {
  rank:13,
  unicode: "🃎"
},
  {
  rank:13,
  unicode: "🃞"
}
];

var deck = (_.shuffle(deck));
// var picked = (_.first(deck).unicode);
// var pRank = (_.first(deck).rank);

function addText(msg) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "card");
  var newContent = document.createTextNode(msg);
  var parent = document.getElementById("someId");
  newDiv.appendChild(newContent);
    parent.appendChild(newDiv);
};

function cardDiscard() {
  var picked = (_.first(deck).unicode);
  addText(picked);

 // var p = document.createTextNode(picked);
 // var o = document.getElementById("someId");
 // o.appendChild(p) ;

 var x = deck.shift();
 return x;

};
while (deck.length > 0) {
    var msg = (playRound(cardDiscard().rank));
  var k = document.createTextNode(msg);
  var j = document.getElementById("someId");
  j.appendChild(k);
};

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
  // result = "<br>" + result + "<br>";
  return result;
};
// document.write("</br>" + playRound(pRank));
