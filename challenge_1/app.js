/*
CONCERNS TO SEPARATE:

Model:
State of player's turn (X or O, X always starts)
State of game: ip, win, tie
State of each square
  On start up
  On reset
  On click

Viewer:
Render X's and O's
Render game complete
  win or tie

Controller:
click listener for each square in grid
  Change state of square, render it
  Triggers assessment of game state
  Toggles state of player's turn
Reset button
  Defaults each square state, render it
  Resets state of game
  Sets state of player's turn to X
*/

console.log('hello from the world');