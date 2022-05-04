var makeDeck = function () {
      // Initialise an empty deck array
      var cardDeck = [];
      // Initialise an array of the 4 suits in our deck. We will loop over this array.
      var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

      // Loop over the suits array
      for (var i = 0; i < suits.length; i += 1) {
            // Store the current suit in a variable
            var currentSuit = suits[i];

            // Loop from 1 to 13 to create all cards for a given suit
            // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
            // This is an example of a loop without an array.
            for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
                  // By default, the card name is the same as rankCounter
                  var cardName = rankCounter;
                  var cardRank = rankCounter;

                  // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
                  if (cardName == 1) {
                        cardName = 'Ace';

                  } else if (cardName == 11) {
                        cardName = 'Jack';
                        cardRank = 10;
                  } else if (cardName == 12) {
                        cardName = 'Queen';
                        cardRank = 10;
                  } else if (cardName == 13) {
                        cardName = 'King';
                        cardRank = 10;
                  }

                  // Create a new card with the current name, suit, and rank
                  var card = {
                        name: cardName,
                        suit: currentSuit,
                        rank: cardRank,
                  };

                  // Add the new card to the deck
                  cardDeck.push(card);
            }
      }



      // Return the completed card deck
      return cardDeck;


};


var cardDeck = makeDeck();

/*
Helper Function: Shuffle a deck
*/

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
      return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (deck) {
      // Loop over the card deck array once
      var currentIndex = 0;
      while (currentIndex < deck.length) {
            // Select a random index in the deck
            var randomIndex = getRandomIndex(deck.length);
            // Select the card that corresponds to randomIndex
            var randomCard = deck[randomIndex];
            // Select the card that corresponds to currentIndex
            var currentCard = deck[currentIndex];
            // Swap positions of randomCard and currentCard in the deck
            deck[currentIndex] = randomCard;
            deck[randomIndex] = currentCard;
            // Increment currentIndex
            currentIndex = currentIndex + 1;
      }
      // Return the shuffled deck
      console.log(deck)

      return deck;

};



/*
Game Code
*/

var startButton = document.querySelector("#start-game");
var hitButton = document.querySelector("#hit");
var standButton = document.querySelector("#stand");
var quitButton = document.querySelector("#quit");
var output = document.querySelector("#output-div");
var cardPicture = document.querySelector('#cardpic');


startButton.addEventListener("click", function () {

      var result = main();
      quitButton.innerHTML = "Quit Game";
      hitButton.style.display = "inline";
      standButton.style.display = "inline";
      quitButton.style.display = "inline";
      startButton.style.display = "none";
      cardPicture.style.display = "none";
      output.style.display = "inline-block";
      output.innerHTML = result;


});



var endGame = false;
var playerCards = [];
var dealerCards = [];
var playerTotal = 0;
var dealerTotal = 0;
var playerCardMessage = '';
var dealerCardMessage = '';
var winMessage = '';
var cardRevealMessage = '';


var checkWin = function () {

      winMessage = "If you want to take another card, click 'hit', if you are done with your turn, click 'stand'";
      if (playerTotal > 21) {
            winMessage = 'You bust! Play again?';
            quitButton.innerHTML = "Play again";
            hitButton.style.display = "none";
            standButton.style.display = "none";
      }

      if (endGame == true) {

            if (playerTotal > dealerTotal) {
                  winMessage = 'You win! Play again?';
            };
            if (playerTotal == dealerTotal) {
                  winMessage = 'It is a draw! Play again?';
            };

            if (playerTotal < dealerTotal && dealerTotal < 22) {
                  winMessage = 'Dealer wins! Play again?';
            };
            if (playerTotal < dealerTotal && dealerTotal > 21) {
                  winMessage = 'Dealer has bust! Player wins! Play again?';
            };
            quitButton.innerHTML = "Play again";
            hitButton.style.display = "none";
            standButton.style.display = "none";



      }

}

var createMessage = function () {

      resetMessage();

      for (var i = 0; i < playerCards.length; i += 1) {
            playerTotal += playerCards[i].rank;
      }


      for (var i = 0; i < dealerCards.length; i += 1) {
            dealerTotal += dealerCards[i].rank;
      }



      //create message for player cards
      for (var i = 0; i < playerCards.length; i += 1) {
            playerCardMessage += ` ${playerCards[i].name} of ${playerCards[i].suit} <br>`;
      }
      //create message for dealer's cards
      for (var i = 0; i < dealerCards.length; i += 1) {
            dealerCardMessage += ` ${dealerCards[i].name} of ${dealerCards[i].suit} <br>`;
      }

      cardRevealMessage = `Your cards are:<br> 
      ${playerCardMessage} <br>
      Your total points = ${playerTotal}<br> <br>
      
      The dealer's cards are: <br>
       ${dealerCardMessage}  <br>
       The dealer's total points = ${dealerTotal}<br><br>
            `;


}

var resetMessage = function () {
      playerTotal = 0;
      dealerTotal = 0;
      playerCardMessage = '';
      dealerCardMessage = '';
}



var main = function () {

      shuffleCards(cardDeck);
      playerCards.unshift(cardDeck.shift());
      playerCards.unshift(cardDeck.shift());
      dealerCards.unshift(cardDeck.shift());
      dealerCards.unshift(cardDeck.shift());

      createMessage();


      checkWin();

      var myOutputValue = `${cardRevealMessage + winMessage}`;

      return myOutputValue;
}


hitButton.addEventListener("click", function () {

      cardRevealMessage = '';

      endGame = 0;
      playerCards.unshift(cardDeck.shift());
      createMessage();
      checkWin();


      output.innerHTML = `You took a card. <br><br>  ${cardRevealMessage + winMessage}`;
});


standButton.addEventListener("click", function () {
      if (dealerTotal > playerTotal) {
            endGame = true;
            createMessage();
            checkWin();
            output.innerHTML = `${cardRevealMessage + winMessage}`;
      }
      if (dealerTotal <= playerTotal || dealerTotal < 17) {
            while (dealerTotal <= playerTotal && dealerTotal < 19) {
                  dealerCards.unshift(cardDeck.shift());
                  createMessage();
            }
            endGame = 1;
            checkWin();
            output.innerHTML = `Dealer takes a card or two. <br> <br>
            ${cardRevealMessage + winMessage}`;

      }
});


quitButton.addEventListener("click", function () {
      resetMessage();
      playerCards = [];
      dealerCards = [];
      endGame = 0;

      hitButton.style.display = "none";
      standButton.style.display = "none";
      quitButton.style.display = "none";
      startButton.style.display = "inline-block";
      cardPicture.style.display = "inline-block";
      var output = document.querySelector("#output-div");
      output.innerHTML = "";
      output.style.display = "none";


});





