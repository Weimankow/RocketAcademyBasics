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

// var playerTurn = "Player1Rolls";
// var player1FinalNumber = "";
// var player1Dice1 = "";
// var player1Dice2 = "";

// var player2FinalNumber = "";
// var player2Dice1 = "";
// var player2Dice2 = "";

// var rollDice = function () {
//   return Math.ceil(Math.random() * 6);
// };

// var main = function (input) {
//   if (playerTurn === "Player1Rolls") {
//     player1Dice1 = rollDice();
//     player1Dice2 = rollDice();
//     playerTurn = "Player1Chooses";
//     console.log(`player 1 dice 1 is ${player1Dice1}`);
//     console.log(`player 1 dice 2 is ${player1Dice2}`);
//     console.log(playerTurn);

//     return `Player 1 rolls! <br>
//    First Dice 🎲: ${player1Dice1} <br>
//    Second Dice 🎲: ${player1Dice2}<br>
//    Please enter whether you want dice roll '1' or dice roll '2' to be the first number.`;
//   }
//   if (playerTurn === "Player1Chooses") {
//     if (input == "1") {
//       player1FinalNumber = Number(`${player1Dice1}${player1Dice2}`);
//       console.log(player1FinalNumber + 1);
//       playerTurn = "Player2Rolls";
//       return `Player 1's final number is ${player1FinalNumber}. <br> It is player 2's turn to roll your dice!`;
//     }
//     if (input == "2") {
//       player1FinalNumber = Number(`${player1Dice2}${player1Dice1}`);
//       console.log(player1FinalNumber + 1);
//       playerTurn = "Player2Rolls";
//       return `Player 1's final number is ${player1FinalNumber}. <br> It is player 2's turn to roll your dice!`;
//     }
//   }

//   if (playerTurn === "Player2Rolls") {
//     player2Dice1 = rollDice();
//     player2Dice2 = rollDice();
//     playerTurn = "Player2Chooses";
//     console.log(`player 2 dice 1 = ${player2Dice1}`);
//     console.log(`player 2 dice 1 = ${player2Dice2}`);

//     return `Player 2 rolls! <br>
//    First Dice 🎲: ${player2Dice1} <br>
//    Second Dice 🎲: ${player2Dice2}<br>
//    Please enter whether you want dice roll '1' or dice roll '2' to be your first number.`;
//   }

//   if (playerTurn === "Player2Chooses") {
//     if (input == "1") {
//       player2FinalNumber = Number(`${player2Dice1}${player2Dice2}`);
//       console.log(player2FinalNumber + 1);
//       playerTurn = "Player1Rolls";
//       if (player1FinalNumber > player2FinalNumber) {
//         return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
//         Player 1 wins! <br>
//         Want a rematch? Player 1 can roll to start a rematch!`;
//       }
//       if (player1FinalNumber === player2FinalNumber) {
//         return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
//         It's a draw! <br>
//         Want a rematch? Player 1 can roll to start a rematch!`;
//       }
//       return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
//       Player 2 wins! <br>
//       Want a rematch? Player 1 can roll to start a rematch!`;
//     }
//     if (input == "2") {
//       player2FinalNumber = Number(`${player2Dice2}${player2Dice1}`);
//       console.log(player2FinalNumber + 1);
//       playerTurn = "Player1Rolls";
//       if (player1FinalNumber > player2FinalNumber) {
//         return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
//         Player 1 wins! <br>
//         Want a rematch? Player 1 can roll to start a rematch! `;
//       }
//       if (player1FinalNumber === player2FinalNumber) {
//         return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
//         It's a draw! <br>
//         Want a rematch? Player 1 can roll to start a rematch!`;
//       }
//       return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
//       Player 2 wins! <br>
//       Want a rematch? Player 1 can roll to start a rematch!`;
//     }
//   }
// };

/*
Second Beat it variation!
Keep a running score for each player
OUtput a leaderboard that lists the 2 players and their scores
    in decreasing order (i.e. highest score at the top)
*/

/* 👉🏻 other things to try:
- input validation
- use javascript to hide textbox when not needed
    References
      https://sebhastian.com/javascript-show-hide-div-onclick-toggle/
      https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
- Leaderboard in a separate section
- refactor code
*/

//leaderboard variables
var NumofPlayer1Wins = 0;
var NumofPlayer2Wins = 0;
var currentLeader = "There is no leader currently.";
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

var beatit2main = function (input) {
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
      //Decide who is winning on leaderboard
      if (NumofPlayer1Wins === NumofPlayer2Wins) {
        currentLeader = `Player 1 Score: ${NumofPlayer1Wins}<br>
        Player 2 Score: ${NumofPlayer2Wins}<br>
        There is no leader currently.`;
      }

      if (NumofPlayer1Wins < NumofPlayer2Wins) {
        currentLeader = `Player 2 Score: ${NumofPlayer2Wins}<br>
        Player 1 Score: ${NumofPlayer1Wins}<br>
        Current winner is Player 2`;
      }
      if (NumofPlayer1Wins > NumofPlayer2Wins) {
        currentLeader = `Player 1 Score: ${NumofPlayer1Wins}<br>
      Player 2 Score: ${NumofPlayer2Wins}<br>
      Current winner is Player 1`;
      }

      return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br> 
      Player 1 wins! <br>
      Want a rematch? Player 1 can roll to start a rematch! <br> <br>
      🏆Leaderboard🏆<br>
      ${currentLeader}<br>`;
    }

    if (player1FinalNumber < player2FinalNumber) {
      //Decide who is winning on leaderboard

      if (NumofPlayer1Wins === NumofPlayer2Wins) {
        currentLeader = `Player 1 Score: ${NumofPlayer1Wins}<br>
        Player 2 Score: ${NumofPlayer2Wins}<br>
        There is no leader currently.`;
      }

      if (NumofPlayer1Wins < NumofPlayer2Wins) {
        currentLeader = `Player 2 Score: ${NumofPlayer2Wins}<br>
        Player 1 Score: ${NumofPlayer1Wins}<br>
        Current winner is Player 2`;
      }
      if (NumofPlayer1Wins > NumofPlayer2Wins) {
        currentLeader = `Player 1 Score: ${NumofPlayer1Wins}<br>
      Player 2 Score: ${NumofPlayer2Wins}<br>
      Current winner is Player 1`;
      }

      return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
      Player 2 wins! <br>
      Want a rematch? Player 1 can roll to start a rematch! <br> <br>
      🏆Leaderboard🏆<br>
      ${currentLeader}<br>`;
    }

    NumofPlayer2Wins = NumofPlayer2Wins + 1;
    //Decide who is winning on leaderboard
    if (NumofPlayer1Wins === NumofPlayer2Wins) {
      currentLeader = `Player 1 Score: ${NumofPlayer1Wins}<br>
      Player 2 Score: ${NumofPlayer2Wins}<br>
      There is no leader currently.`;
    }

    if (NumofPlayer1Wins < NumofPlayer2Wins) {
      currentLeader = `Player 2 Score: ${NumofPlayer2Wins}<br>
      Player 1 Score: ${NumofPlayer1Wins}<br>
      Current winner is Player 2`;
    }
    if (NumofPlayer1Wins > NumofPlayer2Wins) {
      currentLeader = `Player 1 Score: ${NumofPlayer1Wins}<br>
    Player 2 Score: ${NumofPlayer2Wins}<br>
    Current winner is Player 1`;
    }

    console.log(`number of times player 2 wins is... ${NumofPlayer2Wins}`);
    return `Player 2's number is ${player2FinalNumber}. Player 1's number is ${player1FinalNumber}. <br>
    It's a draw! <br>
    Want a rematch? Player 1 can roll to start a rematch! <br> <br>
    🏆Leaderboard🏆<br>
    ${currentLeader}<br>`;
  }
};
