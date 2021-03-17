//alert("working");

var statusBar = document.querySelector(".status-bar");
var container = document.querySelector(".square");
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

 

container.addEventListener("click", function(event){
    console.log(event);
    let whatIsClicked = event.target;

    player = turn%2;

    if (player == 0){
        whatIsClicked.style.backgroundColor = "SteelBlue";
        p0.push(event.target.id);
        statusBar.style.backgroundColor = "Tomato";
    }
    if (player == 1){
        whatIsClicked.style.backgroundColor = "Tomato";
        p1.push(event.target.id);
        statusBar.style.backgroundColor = "SteelBlue";
    }


    turn++;
     
     
    console.log(player, "player");
    console.log(turn, "turn");
    console.log(event.target);
})

console.log(container);


