/* 
There are two players in this game
✅      so there must be a global game mode state that determines which player is currently playing.
The two player takes turns, 
✅     so when one player has entered an input, the game mode switches to the other player
When one player clicks submit, the game rolls two dice
✅     so there should be a roll dice function that will be called twice
The output message shows the results of the dice roll
✅      so there should be two variables, diceRoll1 and diceRoll2, and we should output the value
The player enters whether they want the first dice or second dice to go first.
✅     so maybe input '1' will change the player1Choice to 'diceRoll1,Diceroll2', concatinated into a number. 
✅    while input '2' will change player1Choice to 'diceRoll2, diceRoll1' 
After both players click submit, get the dice number, then choose the dice order, the player with the higher combined number winse
✅      so computer will have to compare the final choices, if player1Choice is > player2Choice, player 1 wins
Output who wins
✅      so create a output message 'player X wins' 
*/

/*
Things to try to refactor the code:
1. Using arrays to keep track of player's final numbers?
is that how we're supposed to use it? player final numbers, if there are 4 players [23, 42, 53, 64]
*/

//👀Version 1 code here👀
//💔💔💔💔💔💔 this code doesn't work, WHY??!?!?!💔💔💔💔💔💔
var playerTurn = "Player1Rolls";
var player1FinalNumber = "";
var player1Dice1 = "";
var player1Dice2 = "";

var player2FinalNumber = "";
var player2Dice1 = "";
var player2Dice2 = "";

var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};
var main = function (input) {
  if (playerTurn === "Player1Rolls") {
    player1Dice1 = rollDice();
    player1Dice2 = rollDice();
    playerTurn = "Player1Chooses";
    console.log(`player 1 dice 1 is ${player1Dice1}`);
    console.log(`player 1 dice 2 is ${player1Dice2}`);
    console.log(playerTurn);
    return `Player 1 rolls! <br>
    First Dice 🎲: ${player1Dice1} <br>
    Second Dice 🎲: ${player1Dice2}<br>
    Please enter whether you want dice roll '1' or dice roll '2' to be the first number.`;
  }
  if (playerTurn === "Player1Chooses") {
    if (input === "1") {
      player1FinalNumber = Number(`${player1Dice1}${player1Dice2}`);
      console.log(player1FinalNumber + 1);
      playerTurn = "Player2Rolls";
      return `Player 1's final number is ${player1FinalNumber}. <br> It is player 2's turn to roll your dice!`;
    }
    if (input === "2") {
      player1FinalNumber = Number(`${player1Dice2}${player1Dice1}`);
      console.log(player1FinalNumber + 1);
      playerTurn = "Player2Rolls";
      return `Player 1's final number is ${player1FinalNumber}. <br> It is player 2's turn to roll your dice!`;
    }
  }

  if (playerTurn === "Player2Rolls") {
    player2Dice1 = rollDice();
    player2Dice2 = rollDice();
    playerTurn = "Player2Chooses";
    console.log(`player 2 dice 1 = ${player2Dice1}`);
    console.log(`player 2 dice 1 = ${player2Dice2}`);

    return `Player 2 rolls! <br>
   First Dice 🎲: ${player2Dice1} <br>
   Second Dice 🎲: ${player2Dice2}<br>
   Please enter whether you want dice roll '1' or dice roll '2' to be your first number.`;
  }

  if (playerTurn === "Player2Chooses") {
    if (input == "1") {
      player2FinalNumber = Number(`${player2Dice1}${player2Dice2}`);
      console.log(player2FinalNumber + 1);
      playerTurn = "Player1Rolls";
      if (player1FinalNumber > player2FinalNumber) {
        return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
        Player 1 wins! <br>
        Want a rematch? Player 1 can roll to start a rematch!`;
      }
      if (player1FinalNumber === player2FinalNumber) {
        return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
        It's a draw! <br>
        Want a rematch? Player 1 can roll to start a rematch!`;
      }
      return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
      Player 2 wins! <br>
      Want a rematch? Player 1 can roll to start a rematch!`;
    }
    if (input == "2") {
      player2FinalNumber = Number(`${player2Dice2}${player2Dice1}`);
      console.log(player2FinalNumber + 1);
      playerTurn = "Player1Rolls";
      if (player1FinalNumber > player2FinalNumber) {
        return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
        Player 1 wins! <br>
        Want a rematch? Player 1 can roll to start a rematch! `;
      }
      if (player1FinalNumber === player2FinalNumber) {
        return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
        It's a draw! <br>
        Want a rematch? Player 1 can roll to start a rematch!`;
      }
      return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
      Player 2 wins! <br>
      Want a rematch? Player 1 can roll to start a rematch!`;
    }
  }
};

//👀Version 2 code here👀

/*
Second Beat it variation!
Keep a running score for each player
OUtput a leaderboard that lists the 2 players and their scores
    in decreasing order (i.e. highest score at the top)
*/

/* 👉🏻 other things to try:
✅ input validation
✅ refactor code into functions
✅ Leaderboard in a separate section
✅ change button text from roll to submit 
- use javascript to hide textbox when not needed
    References
      https://sebhastian.com/javascript-show-hide-div-onclick-toggle/
      https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
*/

//Global variable that's put in main so other versions can run
//leaderboard variables
var NumofPlayer1Wins_G2 = 0;
var NumofPlayer2Wins_G2 = 0;
//Gamestate variable
var playerTurn_G2 = "Player1Rolls";
//player 2 variables
var player1FinalNumber_G2 = "";
var player1Dice1_G2 = "";
var player1Dice2_G2 = "";
//player 2 variables
var player2FinalNumber_G2 = "";
var player2Dice1_G2 = "";
var player2Dice2_G2 = "";

//output messages at end of game

//Decide who is winning on leaderboard
var leaderboard = function () {
  if (NumofPlayer1Wins_G2 < NumofPlayer2Wins_G2) {
    return `🏆Leaderboard🏆<br>
    Player 2 Score: ${NumofPlayer2Wins_G2}<br>
    Player 1 Score: ${NumofPlayer1Wins_G2}<br>
    Current winner is Player 2`;
  }
  if (NumofPlayer1Wins_G2 > NumofPlayer2Wins_G2) {
    return `🏆Leaderboard🏆<br>
    Player 1 Score: ${NumofPlayer1Wins_G2}<br>
  Player 2 Score: ${NumofPlayer2Wins_G2}<br>
  Current winner is Player 1`;
  }

  return `🏆Leaderboard🏆<br>
  Player 1 Score: ${NumofPlayer1Wins_G2}<br>
    Player 2 Score: ${NumofPlayer2Wins_G2}<br>
    It is a draw!`;
};

var togglebutton = document.getElementById("beatit2-submit-button");
var textinputbox = document.getElementById("beatit2-input-field");
var leaderboardtext = document.querySelector("#leaderboardv2");

//end of global variables

var beatit2main = function (input) {
  if (playerTurn_G2 === "Player1Rolls") {
    player1Dice1_G2 = rollDice();
    player1Dice2_G2 = rollDice();
    playerTurn_G2 = "Player1Chooses";
    console.log(`player 1 dice 1 is ${player1Dice1_G2}`);
    console.log(`player 1 dice 2 is ${player1Dice2_G2}`);
    console.log(playerTurn_G2);

    textinputbox.style.display = "block";
    togglebutton.innerHTML = "Submit!";

    return `Player 1 rolls! <br>
        First Dice 🎲: ${player1Dice1_G2} <br>
        Second Dice 🎲: ${player1Dice2_G2}<br>
        Please enter whether you want dice roll '1' or dice roll '2' to be the first number.`;
  }
  if (playerTurn_G2 === "Player1Chooses") {
    //error validation
    if (Number.isNaN(Number(input)) == true) {
      return "sorry please enter a number.";
    }
    if (input < 1 || input > 2) {
      return `Sorry, please enter either '1' or '2'<br>
      Your First Dice 🎲: ${player1Dice1_G2} <br>
      Your Second Dice 🎲: ${player1Dice2_G2}<br>
      Please enter whether you want dice roll '1' or dice roll '2' to be the first number.`;
    }
    togglebutton.innerHTML = "Player 2 Roll Dice!";
    textinputbox.style.display = "none";

    // error validation ends
    if (input == "1") {
      player1FinalNumber_G2 = Number(`${player1Dice1_G2}${player1Dice2_G2}`);
      console.log(player1FinalNumber_G2 + 1);
      playerTurn_G2 = "Player2Rolls";
      return `Player 1's final number is ${player1FinalNumber_G2}. <br> It is player 2's turn to roll your dice!`;
    }
    if (input == "2") {
      player1FinalNumber_G2 = Number(`${player1Dice2_G2}${player1Dice1_G2}`);
      console.log(player1FinalNumber_G2 + 1);
      playerTurn_G2 = "Player2Rolls";
      return `Player 1's final number is ${player1FinalNumber_G2}. <br> It is player 2's turn to roll your dice!`;
    }
  }

  if (playerTurn_G2 === "Player2Rolls") {
    player2Dice1_G2 = rollDice();
    player2Dice2_G2 = rollDice();
    playerTurn_G2 = "Player2Chooses";
    console.log(`player 2 dice 1 = ${player2Dice1_G2}`);
    console.log(`player 2 dice 1 = ${player2Dice2_G2}`);
    textinputbox.style.display = "block";
    togglebutton.innerHTML = "Submit!";

    return `Player 2 rolls! <br>
     First Dice 🎲: ${player2Dice1_G2} <br>
     Second Dice 🎲: ${player2Dice2_G2}<br>
     Please enter whether you want dice roll '1' or dice roll '2' to be your first number.`;
  }

  if (playerTurn_G2 === "Player2Chooses") {
    //error validation
    if (Number.isNaN(Number(input)) == true) {
      return "sorry please enter a number.";
    }
    if (input < 1 || input > 2) {
      return `Sorry, please enter either '1' or '2'<br>
      Your First Dice 🎲: ${player1Dice1_G2} <br>
      Your Second Dice 🎲: ${player1Dice2_G2}<br>
      Please enter whether you want dice roll '1' or dice roll '2' to be the first number.`;
    }
    textinputbox.style.display = "none";
    togglebutton.innerHTML = "Player 1 Roll Dice for a New Round!";

    // error validation ends
    if (input === "1") {
      player2FinalNumber_G2 = Number(`${player2Dice1_G2}${player2Dice2_G2}`);
    }

    if (input === "2") {
      player2FinalNumber_G2 = Number(`${player2Dice2_G2}${player2Dice1_G2}`);
    }

    //change game state to player 1 rolls
    playerTurn_G2 = "Player1Rolls";
    //Find out who won the game and post a message
    if (player1FinalNumber_G2 > player2FinalNumber_G2) {
      NumofPlayer1Wins_G2 = NumofPlayer1Wins_G2 + 1;
      leaderboardtext.innerHTML = leaderboard();
      console.log(`number of times player 1 wins is... ${NumofPlayer1Wins_G2}`);

      return `Player 2's number is ${player2FinalNumber_G2}. Player 1's number is ${player1FinalNumber_G2}. <br> 
      Player 1 wins! <br>
      ⬇️️⬇️️⬇️️Check out the leaderboard below for the latest scores!⬇️️⬇️️⬇️️ <br>
      Want a rematch? Player 1 can roll to start a rematch! <br> <br>
      `;
    }

    if (player1FinalNumber_G2 < player2FinalNumber_G2) {
      NumofPlayer2Wins_G2 = NumofPlayer2Wins_G2 + 1;
      leaderboardtext.innerHTML = leaderboard();
      return `Player 2's number is ${player2FinalNumber_G2}. Player 1's number is ${player1FinalNumber_G2}. <br>
      Player 2 wins! <br>
      ⬇️️⬇️️⬇️️Check out the leaderboard below for the latest scores!⬇️️⬇️️⬇️️ <br>
      Want a rematch? Player 1 can roll to start a rematch! <br> <br>
      `;
    }

    NumofPlayer2Wins_G2 = NumofPlayer2Wins_G2 + 1;
    leaderboardtext.innerHTML = leaderboard();
    console.log(`number of times player 2 wins is... ${NumofPlayer2Wins_G2}`);
    return `Player 2's number is ${player2FinalNumber_G2}. Player 1's number is ${player1FinalNumber_G2}. <br>
    It's a draw! <br>
    ⬇️️⬇️️⬇️️Check out the leaderboard below for the latest scores!⬇️️⬇️️⬇️️ <br>
    Want a rematch? Player 1 can roll to start a rematch! <br> <br>
    `;
  }
};

//👀Version 3 code here, Un-comment to play👀

/* To do...
- Refactor code with arrays
- Automate the sequence of the dice, with the highest number selected

*/

/*
//leaderboard variables
var NumofPlayer1Wins = 0;
var NumofPlayer2Wins = 0;
//Gamestate variable
var playerTurn = "Player1Rolls";
//player 2 variables
var player1FinalNumber = "";
var player1Dice1 = "";
var player1Dice2 = "";
//player 2 variables
var player2FinalNumber = "";
var player2Dice1 = "";
var player2Dice2 = "";

//output messages at end of game

var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

//Decide who is winning on leaderboard
var leaderboard = function () {
  if (NumofPlayer1Wins < NumofPlayer2Wins) {
    return `🏆Leaderboard🏆<br>
    Player 2 Score: ${NumofPlayer2Wins}<br>
    Player 1 Score: ${NumofPlayer1Wins}<br>
    Current winner is Player 2`;
  }
  if (NumofPlayer1Wins > NumofPlayer2Wins) {
    return `🏆Leaderboard🏆<br>
    Player 1 Score: ${NumofPlayer1Wins}<br>
  Player 2 Score: ${NumofPlayer2Wins}<br>
  Current winner is Player 1`;
  }

  return `🏆Leaderboard🏆<br>
  Player 1 Score: ${NumofPlayer1Wins}<br>
    Player 2 Score: ${NumofPlayer2Wins}<br>
    There is no leader currently.`;
};

var beatit3main = function (input) {
  if (playerTurn === "Player1Rolls") {
    player1Dice1 = rollDice();
    player1Dice2 = rollDice();
    playerTurn = "Player1Chooses";
    console.log(`player 1 dice 1 is ${player1Dice1}`);
    console.log(`player 1 dice 2 is ${player1Dice2}`);
    console.log(playerTurn);

    return `Player 1 rolls! <br>
        First Dice 🎲: ${player1Dice1} <br>
        Second Dice 🎲: ${player1Dice2}<br>
        Please enter whether you want dice roll '1' or dice roll '2' to be the first number.`;
  }
  if (playerTurn === "Player1Chooses") {
    //error validation
    if (Number.isNaN(Number(input)) == true) {
      return "sorry please enter a number.";
    }
    if (input < 1 || input > 2) {
      return `Sorry, please enter either '1' or '2'<br>
      Your First Dice 🎲: ${player1Dice1} <br>
      Your Second Dice 🎲: ${player1Dice2}<br>
      Please enter whether you want dice roll '1' or dice roll '2' to be the first number.`;
    }

    // error validation ends
    if (input == "1") {
      player1FinalNumber = Number(`${player1Dice1}${player1Dice2}`);
      console.log(player1FinalNumber + 1);
      playerTurn = "Player2Rolls";
      return `Player 1's final number is ${player1FinalNumber}. <br> It is player 2's turn to roll your dice!`;
    }
    if (input == "2") {
      player1FinalNumber = Number(`${player1Dice2}${player1Dice1}`);
      console.log(player1FinalNumber + 1);
      playerTurn = "Player2Rolls";
      return `Player 1's final number is ${player1FinalNumber}. <br> It is player 2's turn to roll your dice!`;
    }
  }

  if (playerTurn === "Player2Rolls") {
    player2Dice1 = rollDice();
    player2Dice2 = rollDice();
    playerTurn = "Player2Chooses";
    console.log(`player 2 dice 1 = ${player2Dice1}`);
    console.log(`player 2 dice 1 = ${player2Dice2}`);

    return `Player 2 rolls! <br>
     First Dice 🎲: ${player2Dice1} <br>
     Second Dice 🎲: ${player2Dice2}<br>
     Please enter whether you want dice roll '1' or dice roll '2' to be your first number.`;
  }

  if (playerTurn === "Player2Chooses") {
    //error validation
    if (Number.isNaN(Number(input)) == true) {
      return "sorry please enter a number.";
    }
    if (input < 1 || input > 2) {
      return `Sorry, please enter either '1' or '2'<br>
      Your First Dice 🎲: ${player1Dice1} <br>
      Your Second Dice 🎲: ${player1Dice2}<br>
      Please enter whether you want dice roll '1' or dice roll '2' to be the first number.`;
    }

    // error validation ends
    if (input === "1") {
      player2FinalNumber = Number(`${player2Dice1}${player2Dice2}`);
    }

    if (input === "2") {
      player2FinalNumber = Number(`${player2Dice2}${player2Dice1}`);
    }

    //change game state to player 1 rolls
    playerTurn = "Player1Rolls";

    //Find out who won the game and post a message
    if (player1FinalNumber > player2FinalNumber) {
      NumofPlayer1Wins = NumofPlayer1Wins + 1;
      console.log(`number of times player 1 wins is... ${NumofPlayer1Wins}`);

      return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br> 
      Player 1 wins! <br>
      Want a rematch? Player 1 can roll to start a rematch! <br> <br>
      ${leaderboard()}`;
    }

    if (player1FinalNumber < player2FinalNumber) {
      NumofPlayer2Wins = NumofPlayer2Wins + 1;

      return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
      Player 2 wins! <br>
      Want a rematch? Player 1 can roll to start a rematch! <br> <br>
      ${leaderboard()}`;
    }

    NumofPlayer2Wins = NumofPlayer2Wins + 1;

    console.log(`number of times player 2 wins is... ${NumofPlayer2Wins}`);
    return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
    It's a draw! <br>
    Want a rematch? Player 1 can roll to start a rematch! <br> <br>
    ${leaderboard()}`;
  }
};
*/
