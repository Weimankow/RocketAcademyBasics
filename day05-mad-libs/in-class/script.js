// Take input and store in an array  - called list of adjectives
// When user inputs another word, add to end of array
// If the input == create
// get a random adjective from array
// return sentence with adjective

//Exercise 1

var listOfAdj = [];

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.

  if (input != "create") {
    listOfAdj.push(input);
    console.log(listOfAdj);
    return `List of Adjectives so far: ${listOfAdj}`;
  }

  var getRandomIndex = function (arrayLength) {
    // create a random number from zero to array length minus one.
    // this number is in the range from the first
    // index (zero) to the last index (array length minus one)
    var randomIndex = Math.floor(Math.random() * arrayLength);
    return randomIndex;
  };

  if (input == "create") {
    var randomAdj = listOfAdj[getRandomIndex(listOfAdj.length)];
    return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
  }
};

//Exercise 2

var gameMode = "input";

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.

  var getRandomIndex = function (arrayLength) {
    // create a random number from zero to array length minus one.
    // this number is in the range from the first
    // index (zero) to the last index (array length minus one)
    var randomIndex = Math.floor(Math.random() * arrayLength);
    return randomIndex;
  };

  if (input == "create") {
    gameMode = "madLib";
  }

  if (gameMode == "madLib") {
    var randomAdj = listOfAdj[getRandomIndex(listOfAdj.length)];
    return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdj} wife.`;
  }
  if (input !== "create") {
    listOfAdj.push(input);
    console.log(listOfAdj);
    return `List of Adjectives so far: ${listOfAdj}`;
  }
};

//Exercise 3

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
