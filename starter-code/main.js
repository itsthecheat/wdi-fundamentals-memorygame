console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardTwo === cardFour && cardThree) {
  alert('Sorry, try again.')
}
else if (cardOne === cardTwo || cardThree === cardFour) {
  alert('You found a match!')
} */

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';

    board.appendChild(cardElement);
  }

}

