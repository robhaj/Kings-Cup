var deck = [
{
  rank:1,
  unicode: "U+1F0A1"
},

{
  rank:1,
  unicode: "U+1F0B1"
},
{
  rank:1,
  unicode: "U+1F0C1"
},
{
  rank:1,
  unicode: "U+1F0D1"
},
{
  rank:2,
  unicode: "U+1F0A2"
},
  {
  rank:2,
  unicode: "U+1F0B2"
},
  {
  rank:2,
  unicode: "U+1F0C2"
},
  {
  rank:2,
  unicode: "U+1F0D2"
},
  {
  rank:3,
  unicode: "U+1F0A3"
},
  {
  rank:3,
  unicode: "U+1F0B3"
},
  {
  rank:3,
  unicode: "U+1F0C3"
},
  {
  rank:3,
  unicode: "U+1F0D3"
},
  {
  rank:4,
  unicode: "U+1F0A4"
},
  {
  rank:4,
  unicode: "U+1F0B4"
},
  {
  rank:4,
  unicode: "U+1F0C4"
},
  {
  rank:4,
  unicode: "U+1F0D4"
},
  {
  rank:5,
  unicode: "U+1F0A5"
},
  {
  rank:5,
  unicode: "U+1F0B5"
},
  {
  rank:5,
  unicode: "U+1F0C5"
},
  {
  rank:5,
  unicode: "U+1F0D5"
},
  {
  rank:6,
  unicode: "U+1F0A6"
},
  {
  rank:6,
  unicode: "U+1F0B6"
},
  {
  rank:6,
  unicode: "U+1F0C6"
},
  {
  rank:6,
  unicode: "U+1F0D6"
},
  {
  rank:7,
  unicode: "U+1F0A7"
},
  {
  rank:7,
  unicode: "U+1F0B7"
},
  {
  rank:7,
  unicode: "U+1F0C7"
},
  {
  rank:7,
  unicode: "U+1F0D7"
},
  {
  rank:8,
  unicode: "U+1F0A8"
},
  {
  rank:8,
  unicode: "U+1F0B8"
},
  {
  rank:8,
  unicode: "U+1F0C8"
},
  {
  rank:8,
  unicode: "U+1F0D8"
},
  {
  rank:9,
  unicode: "U+1F0A9"
},
  {
  rank:9,
  unicode: "U+1F0B9"
},
  {
  rank:9,
  unicode: "U+1F0C9"
},
  {
  rank:9,
  unicode: "U+1F0D9"
},
  {
  rank:10,
  unicode: "U+1F0AA"
},
  {
  rank:10,
  unicode: "U+1F0BA"
},
  {
  rank:10,
  unicode: "U+1F0CA"
},
  {
  rank:10,
  unicode: "U+1F0DA"
},
  {
  rank:11,
  unicode: "U+1F0AB"
},
  {
  rank:11,
  unicode: "U+1F0BB"
},
  {
  rank:11,
  unicode: "U+1F0CB"
},
  {
  rank:11,
  unicode: "U+1F0DB"
},
  {
  rank:12,
  unicode: "U+1F0AD"
},
  {
  rank:12,
  unicode: "U+1F0BD"
},
  {
  rank:12,
  unicode: "U+1F0CD"
},
  {
  rank:12,
  unicode: "U+1F0DD"
},
  {
  rank:13,
  unicode: "U+1F0AE"
},
  {
  rank:13,
  unicode: "U+1F0BE"
},
  {
  rank:13,
  unicode: "U+1F0CE"
},
  {
  rank:13,
  unicode: "U+1F0DE"
}
];

var deck = (_.shuffle(deck));
// var picked = (_.first(deck).unicode);
// var pRank = (_.first(deck).rank);



function cardDiscard() {
  var picked = (_.first(deck).unicode)
 document.write(picked);
 var x = deck.shift();
 return x;

};
while (deck.length > 0) {
    document.write(playRound(cardDiscard().rank));
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
  result = "<br>" + result + "<br>";
  return result;
};
// document.write("</br>" + playRound(pRank));
