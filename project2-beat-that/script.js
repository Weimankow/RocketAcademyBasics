/* 
There are two players in this game
✅      so there must be a global game mode state that determines which player is currently playing.
The two player takes turns, 
      so when one player has entered an input, the game mode switches to the other player
When one player clicks submit, the game rolls two dice
      so there should be a roll dice function that will be called twice
The output message shows the results of the dice roll
      so there should be two variables, diceRoll1 and diceRoll2, and we should output the value
The player enters whether they want the first dice or second dice to go first.
      so maybe input '1' will change the player1Choice to 'diceRoll1,Diceroll2', concatinated into a number. 
      while input '2' will change player1Choice to 'diceRoll2, diceRoll1' 
After both players click submit, get the dice number, then choose the dice order, the player with the higher combined number winse
      so computer will have to compare the final choices, if player1Choice is > player2Choice, player 1 wins
Output who wins
      so create a output message 'player X wins' 
*/

var playerTurn = "Player1Rolls";

var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

var main = function (input) {
  var player1Dice1 = rollDice();
  var player1Dice2 = rollDice();
  return `${player1Dice1}  ${player1Dice2}`;
};
