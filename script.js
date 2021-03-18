//alert("working");

var clickSound = new Audio("click-sound.mp3");
var statusBar = document.querySelector(".status-bar");
var container = document.querySelector(".square");
var cell = document.querySelectorAll(".grid-item");
var xMarker = document.querySelector('#x');
var oMarker = document.querySelector('#o');
var refreshButton = document.querySelector("button");
var turnText = document.querySelector(".turn");
var subBar = document.getElementById(subBar);


refreshButton.addEventListener("click", function() {
    location.reload()
})

console.log(xMarker);
 

var turn = 0;
var player = 0;

var win = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,5,9],
        [3,5,7]
    ];

var p0 = [];
var p1 = [];


function colorChanger (event) {
     
    let whatIsClicked = event.target;
    player = turn%2;
    

    if (player == 0){
        
        clickSound.play();
        let newX = xMarker.cloneNode(true);
        newX.classList.remove("no-display");
        whatIsClicked.appendChild(newX);
        newX.parentNode.classList.remove("select");
        p0.push(event.target.id);
        turnText.innerHTML = "o";
         
         
    }
    if (player == 1){
        
        clickSound.play();
        let newO = oMarker.cloneNode(true);
        newO.classList.remove("no-display", "select");
        whatIsClicked.appendChild(newO);
        newO.parentNode.classList.remove("select");
        p1.push(event.target.id);
        turnText.innerHTML = "x";
         
         
    }


    turn++;
    
     
    console.log(player, "player");
    console.log(turn, "turn");
    console.log(event.target);


}

console.log(cell);



cell.forEach( function(e){
    e.addEventListener("click", colorChanger, {once:true});
});

//container.addEventListener("click", colorChanger);

console.log(container);


