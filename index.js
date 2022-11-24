// each array item represents a player
var tokens = { "p1": { 1: false, 2: false, 3: false, 4: false }, "p2": { 1: false, 2: false, 3: false, 4: false }, "p3": { 1: false, 2: false, 3: false, 4: false }, "p4": { 1: false, 2: false, 3: false, 4: false } };
// tokenPosition value needs to match value on board
var tokenPosition = { "p1": { 1: '', 2: '', 3: '', 4: '' }, "p2": { 1: '', 2: '', 3: '', 4: '' }, "p3": { 1: '', 2: '', 3: '', 4: '' }, "p4": { 1: '', 2: '', 3: '', 4: '' } };


// IT STARTS HERE
// This method is called for every chance of user
function playUser() {
  var activePlayer = getActivePlayer();
  var diceVal = playDice(activePlayer);
  var totalActiveTokens = totalActiveTokens();
  if (totalActiveTokens < 4 && (diceVal == 4 || diceVal == 8)) {
    // check if user likes to add a new token as active, if active return else continue to next lines
  }

  chosenToken = chooseActiveToken //choose an active token to move the card further based on value
  moveChosenTokenOnBoard(activePlayer, chosenToken, diceVal);
}

function totalActiveTokens(activePlayer) {
  token[activePlayer]

  //returns number of active tokens in token[activePlayer]
  return 0;
}

// Board, token
function playDice(player) {
  //Fill program to create random values of 1,2,3,4,8

}

//GET Active player from UI or your choice
function getActivePlayer() {

}

function chooseActiveTojen() {
  var chosenToken = askUserToChooseAToken(); //In UI, ask user to choose an active token
  //Check if this token can move by given diceVal positions, else the user needs to chose other token OR
  //If there aren't any tokens, do nothing
  return chosenToken;
}

function moveChosenTokenOnBoard(activePlayer, chosenToken, diceVal) {
  newPosition = moveTokenByDiceValue(tokenPosition[activePlayer][chosenToken], diceVal)

  // if moving
}

function moveTokenByDiceValue(token, diceVal) {
  // if moving the dice to new position kills another players token, then kill it by changing its tokens, tokenPosition values
}