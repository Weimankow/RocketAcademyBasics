// Part 1

//User puts in scissors, paper or stone
//Program chooses scissors, paper or stone
// if user = scissors (1), program = paper(2),
//    show user win
//    else show user lose

// if user = paper(2), program = stone(3),
//    show user win
//    else show user lose

// if user = stone(3), program = scissors(1),
//    show user win
//    else show user lose

// if user choice === program choice,
//    it is a draw

// Part 2
// Computer keeps tracks of number of times uers has won
// Message shows that
// Computer keeps track of number of times computer has won
// message shows that

var computerWins = 0;
var playerWins = 0;
var numDraws = 0;

var main = function (input) {
  var computerChoice = Math.ceil(Math.random() * 3);
  console.log(computerChoice);
  if (computerChoice === 1) {
    computerChoice = "scissors";
  }
  if (computerChoice === 2) {
    computerChoice = "paper";
  }
  if (computerChoice === 3) {
    computerChoice = "stone";
  }
  console.log(computerChoice);

  if (
    (input === "scissors" && computerChoice === "paper") ||
    (input === "paper" && computerChoice === "stone") ||
    (input === "stone" && computerChoice === "scissors")
  ) {
    playerWins = playerWins + 1;
    return `You win! <br>
    You played ${input} and the computer played ${computerChoice}. <br>
    Score: Player ${playerWins} v.s Computer ${computerWins}. There are ${numDraws} draws. <br>
    Type 'scissors', 'paper', or 'stone to play another round`;
  }
  if (input === computerChoice) {
    numDraws = numDraws + 1;
    return `It's a draw! <br>
    You played ${input} and the computer played ${computerChoice}. <br>
    Score: Player ${playerWins} v.s Computer ${computerWins}. There are ${numDraws} draws. <br>
    Type 'scissors', 'paper', or 'stone to play another round`;
  }
  computerWins = computerWins + 1;
  return `You lose! <br>
  You played ${input} and the computer played ${computerChoice}. <br>
  Score: Player ${playerWins} v.s Computer ${computerWins}. There are ${numDraws} draws. <br>
  Type 'scissors', 'paper', or 'stone to play another round`;
};
