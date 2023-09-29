//main div
let maindiv = document.createElement("div");
maindiv.style.margin = "20px";
maindiv.style.display = "flex"
maindiv.style.alignItems = "center"
maindiv.style.flexDirection = "column"

//heading
let playDice = document.createElement("h3");
playDice.innerHTML = "Let's Play Dice";
playDice.style.color ="green"

let head = document.createElement("h1");
head.style.margin = "0"
head.innerHTML = "Anyone can Start";

//playerdiv
let players = document.createElement("div");
players.style.paddingTop = "3rem"
players.style.width = "700px"
players.style.display = "grid";
players.style.gridAutoFlow = "column";
players.style.justifyContent = "space-between";
players.style.alignItems = "end";

//player1
let player1 = document.createElement("div");
player1.style.display = "grid";
player1.style.justifyContent = "center";
player1.style.justifyItems = "center";

let p1Name = document.createElement("h3");
p1Name.innerHTML = "Player-1";
p1Name.style.color = "green"

let p1Score = document.createElement("h1");
p1Score.setAttribute("id", "player1Score")
p1Score.innerHTML = "0";
p1Score.style.margin = "0 0 18.720px 0";
p1Score.style.fontSize = "50px";

let p1Button = document.createElement("button");
p1Button.setAttribute("id", "rollButton1");
p1Button.setAttribute("onclick", "rollDice(1)");
p1Button.innerHTML = "Roll Dice";
p1Button.style.backgroundColor = "green";
p1Button.style.border = "none";
p1Button.style.padding = "10px 20px";
p1Button.style.color = "white";

p1Button.addEventListener('mouseover', function() {
    p1Button.style.cursor = 'pointer';
    p1Button.style.backgroundColor = "rgb(9, 173, 9)"
});
p1Button.addEventListener('mouseleave', function() {
    p1Button.style.cursor = 'pointer';
    p1Button.style.backgroundColor = "green";
});

player1.append(p1Name, p1Score, p1Button);

//diceimg
let diceimg = document.createElement("div");
let image = document.createElement("img");
image.setAttribute("id", "dice");
image.style.width = "130px"
image.style.height = "130px"

diceimg.append(image);

//player2
let player2 = document.createElement("div");
player2.style.display = "grid";
player2.style.justifyContent = "center";
player2.style.justifyItems = "center";

let p2Name = document.createElement("h3");
p2Name.innerHTML = "Player-2";
p2Name.style.color = "green"

let p2Score = document.createElement("h1");
p2Score.setAttribute("Id", "player2Score");
p2Score.innerHTML = "0";
p2Score.style.margin = "0 0 18.720px 0";
p2Score.style.fontSize = "50px";

let p2Button = document.createElement("button");
p2Button.setAttribute("id", "rollButton2");
p2Button.setAttribute("onclick", "rollDice(2)");
p2Button.innerHTML = "Roll Dice";
p2Button.style.backgroundColor = "green";
p2Button.style.border = "none";
p2Button.style.padding = "10px 20px";
p2Button.style.color = "white";

p2Button.addEventListener('mouseover', function() {
    p2Button.style.cursor = 'pointer';
    p2Button.style.backgroundColor = "rgb(9, 173, 9)"
});
p2Button.addEventListener('mouseleave', function() {
    p2Button.style.cursor = 'pointer';
    p2Button.style.backgroundColor = "green";
});

player2.append(p2Name, p2Score, p2Button);

//Reset Button
let reset = document.createElement("button");
reset.setAttribute("id", "resetButton");
reset.setAttribute("onclick", "resetGame()");
reset.innerHTML = "RESET"
reset.style.color = "#000";
reset.style.backgroundColor = "pink"
reset.style.fontWeight = "bold";
reset.style.padding = "10px 20px ";
reset.style.border = "none";
reset.style.marginTop = "5rem";

reset.addEventListener('mouseover', function() {
    reset.style.cursor = 'pointer';
    reset.style.backgroundColor = "indianred";
});
reset.addEventListener('mouseleave', function() {
    reset.style.cursor = 'pointer';
    reset.style.backgroundColor = "pink";
});



players.append(player1, diceimg, player2)
maindiv.append(playDice, head, players, reset)
document.body.append(maindiv)

//////////////////////////////////////////////////////////////////////////////////

let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0
function rollDice(player) {
  const diceElement = document.getElementById("dice");
  const rollButton1 = document.getElementById("rollButton1");
  const rollButton2 = document.getElementById("rollButton2");
  const resetButton = document.getElementById("resetButton");

  const currentPlayerScore = player === 1 ? player1Score : player2Score;

  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceElement.src = "./Assets/"+randomNumber+".png";
  
  let dis1 = document.getElementById("dice");
  dis1.style.display = "block"
    

  if (player === 1) {
    player1Score += randomNumber;
    document.getElementById("player1Score").textContent = player1Score;
    head.innerHTML = "Player-"+(player + 1) +" To Play";
    rollButton1.disabled = true;
    rollButton2.disabled = false;

  } else {
    player2Score += randomNumber;
    document.getElementById("player2Score").textContent = player2Score;
    head.innerHTML = "Player-"+(player - 1) +" To Play";
    rollButton2.disabled = true;
    rollButton1.disabled = false;
  }

    if (player1Score >= 30 || player2Score >= 30) {
      alert(`Player ${player} wins! - Please RESET The Game`);
      rollButton1.disabled = true;
      rollButton2.disabled = true;
      resetButton.disabled = false;
    }
}

  function resetGame() {
    player1Score = 0;
    player2Score = 0;
    document.getElementById("player1Score").textContent = "0";
    document.getElementById("player2Score").textContent = "0";
    head.innerHTML = "Anyone can Start";
    let dis = document.getElementById("dice");
    dis.style.display = "none"
    currentPlayer = Math.floor(Math.random() * 2) + 1; // Randomly set starting player
    document.getElementById("rollButton1").disabled = false;
    document.getElementById("rollButton2").disabled = false;
    document.getElementById("resetButton").disabled = true;
  }
  