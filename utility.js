function addCard(cardChar) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(cardChar);
  var parent = document.getElementById("someId");

  newDiv.setAttribute("class", "card");
  newDiv.appendChild(newContent);
  parent.insertBefore(newDiv, parent.firstChild);
}

function cardDiscard() {
  if (shufDeck[0] !== undefined) {
    var picked = shufDeck[0].unicode;
    var x = shufDeck.shift();
    addCard(picked);
    return x;
  }
}

function showCard(num){
  for (var i = 0; i < num; i++) {
    var current = cardDiscard();
    if (current !== undefined) {
      var msg = (playRound(current.rank));
      var newText = document.createElement('span');
      var parent = document.getElementById('someId');
      newText.innerText = msg;
      newText.className = 'rnd-text';
      parent.insertBefore(newText, parent.firstChild.nextSibling);
    }
    else {
      alert("Game Over!");
      window.location.reload();
    }
  }
}

function shuffle(array) {
  var wrk = array.slice(0);
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
}
