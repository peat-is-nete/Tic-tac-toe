//alert("working");

var clickSound = new Audio("click-sound.mp3");
var statusBar = document.querySelector(".status-bar");
var container = document.querySelector(".square");
var cell = document.querySelectorAll(".grid-item");
var xMarker = document.querySelector('#x');
var oMarker = document.querySelector('#o');
var resetButton = document.querySelector("button");
var turnText = document.querySelector(".turn");
var subBar = document.getElementById("sub-bar");
var title = document.getElementById("title");
var t1 = document.getElementById("1");
var bodyNode = document.querySelector("body");
 

var turn = 0;
var player = 0;

// These are the win
var winMoves = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"],
        
        ["1","4","7"],
        ["2","5","8"],
        ["3","6","9"],

        ["1","5","9"],
        ["3","5","7"]
    ];

// List of all moves for both players.
var p0MoveList = [];
var p1MoveList = [];


// For this function to work, you must return a 'false' to caller.
function reload() {
    location.reload();
    return false;
}

// Adding page reload function to reset button
resetButton.addEventListener("click", function() {
    clickSound.play();
    setTimeout(reload, 100);
})


function playerPick (event) {
     
    let whatIsClicked = event.target;
    player = turn%2;
    
    

    if (player == 0){
        
        clickSound.play();
        let newX = xMarker.cloneNode(true);
        // whatIsClicked.style.boxSizing = "border-box";
        // whatIsClicked.style.border = "1vw solid gray";
        newX.classList.remove("no-display");
        whatIsClicked.appendChild(newX);
        newX.parentNode.classList.remove("select");
        p0MoveList.push(event.target.id);
        turnText.innerHTML = "o";
         
         
    }
    if (player == 1){
        
        clickSound.play();
        let newO = oMarker.cloneNode(true);
        // whatIsClicked.style.boxSizing = "border-box";
        // whatIsClicked.style.border = "1vw solid gray";
        newO.classList.remove("no-display", "select");
        whatIsClicked.appendChild(newO);
        newO.parentNode.classList.remove("select");
        p1MoveList.push(event.target.id);
        turnText.innerHTML = "x";
         
         
    }

    isWinner();



    turn++;

    if (turn == 9 && !(isWinner()) ){
        resetButton.style.backgroundColor = "white";
        title.innerHTML = "Cat's Game ^._.^";
        // console.log(t1);
        // t1.style.border = "1vw solid red";
         

    }

    
     
}

// Finds if there is a winner
function isWinner () {

   
    let sortedp0 = p0MoveList.sort();
    let sortedp1 = p1MoveList.sort();
    let winner = "";

     for (let i=0; i<winMoves.length; i++){

        if  ( winMoves[i].every( x => sortedp1.includes(x)) || winMoves[i].every( y => sortedp0.includes(y)) ) {
            
            console.log(sortedp1.length);
            console.log(sortedp0.length);
            
            if( (sortedp1.length) > (sortedp0.length-1) ) {
                winner = "o";
            }else{
                winner = "x";
            }


            cell.forEach( function(e){
                e.removeEventListener("click", playerPick);
            });


            if (winner == "x"){
                bodyNode.style.backgroundColor = "LightSeaGreen";
                statusBar.style.backgroundColor = "LightSeaGreen";
                subBar.innerText = "winner is x.";
                
            
            //alert("winner is: " + winner);
            
            //reload();
            }else{
                bodyNode.style.backgroundColor = "LightSalmon";
                statusBar.style.backgroundColor = "LightSalmon";
                subBar.innerText = "winner is o.";
            }

            return true;
        }
         
         
     }

     return false;
}


// Adding event listener to each cell
cell.forEach( function(e){
    e.addEventListener("click", playerPick, {once:true});
});






