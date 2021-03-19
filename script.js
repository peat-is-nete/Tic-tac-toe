//alert("working");

var clickSound = new Audio("click-sound.mp3");
var statusBar = document.querySelector(".status-bar");
var container = document.querySelector(".square");
var cell = document.querySelectorAll(".grid-item");
var xMarker = document.querySelector('#x');
var oMarker = document.querySelector('#o');
var resetButton = document.querySelector("button");
var turnText = document.querySelector(".turn");
var subBar = document.getElementById(subBar);

var turn = 0;
var player = 0;

var winMoves = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,5,9],
        [3,5,7]
    ];

var p0MoveList = [];
var p1MoveList = [];

function reload() {
    location.reload();
    return false;
}

// Adding page reload function to reset button
resetButton.addEventListener("click", function() {
    clickSound.play();
    setTimeout(reload, 100);
     
     
})


function colorChanger (event) {
     
    let whatIsClicked = event.target;
    player = turn%2;
    
    

    if (player == 0){
        
        clickSound.play();
        let newX = xMarker.cloneNode(true);
        whatIsClicked.style.boxSizing = "border-box";
        whatIsClicked.style.border = "1vw solid gray";
        newX.classList.remove("no-display");
        whatIsClicked.appendChild(newX);
        newX.parentNode.classList.remove("select");
        p0MoveList.push(event.target.id);
        turnText.innerHTML = "o";
         
         
    }
    if (player == 1){
        
        clickSound.play();
        let newO = oMarker.cloneNode(true);
        whatIsClicked.style.boxSizing = "border-box";
        whatIsClicked.style.border = "1vw solid gray";
        newO.classList.remove("no-display", "select");
        whatIsClicked.appendChild(newO);
        newO.parentNode.classList.remove("select");
        p1MoveList.push(event.target.id);
        turnText.innerHTML = "x";
         
         
    }


    turn++;
    

}

 


// Adding event listener to each cell
cell.forEach( function(e){
    e.addEventListener("click", colorChanger, {once:true});
});






