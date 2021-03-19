# Tic-tac-toe


Description:

  Just a simple JS browser tic-tac-toe game.



User Stories:

  - As a user, I should be able to start a new tic tac toe game.
  - As a user, I should be able to click on one of the nine squares of the board with the first player being 'x'.
  - As a user, I should be able to alternate between clicking a square on the board with an 'x' and then with an 'o'.
  - As a user, I should receive a winning message when either 'x' or 'o' wins.
  - As a user, I should receive a 'cat's game' message if neither 'x' or 'o' wins.
  - As a user, I should be able to click on the same square on the board more than once.
  - As a user, I should receive an audio notification if a square is clicked or if the game has ended.
  - As a user, I should be able to play the game again without refreshing the page.
  - As a user, I shoulb be able to keep score of sets of games.



Strategy:

After creating a 9 box CSS grid, I added unique id tags for each box numbered 1 through 9. 
These id tags correspond to the box clicked on each turn by either Player 'x' or Player 'o'. 
Two arrays hold the list of moves for each player. 
Player 'x' has their own separate moves array, and Player 'o' has their own separate moves array. 
Upon each turn, the moves of both Player 'o' and Player 'x' are checked against another "winning moves" array that has the winning combinations of 
all 8 possible winning moves, for example ('1', '2', '3') would be all squares selected in the top row, and ('1', '5', '9') would result in a 
diagonal win. After each click, the event listener should be removed to prevent future clicks (you can only click on a unique square once). This is done by passing a third optional argument ( {once:true} ) to the addEventListener method. This will only allow the event to fire once.




Interesting Things Discovered:

  - SVG : 
      These are scalable vector graphics. They're basically math instructions on how to display a graphic -- think graphing calculator. What's nice about these is that you don't have jagged edges when zooming in on a picture.
  
  - CLONING NODES:
      The method: <selectedNode>.cloneNode() will make a copy of the selected node. Also, if you need all children nodes copied too, use the <selectedNode>.cloneNode([deep]).
  
  

Things to Work On:

  - Animation for winning screen and the inclusion of winning SFX.
  - Browser support.
  - A better way of starting the game.
  - Local storage for sets of games. Basically, if the players want to play more than one game and keep the score of each game.
