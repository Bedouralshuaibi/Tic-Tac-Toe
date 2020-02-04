let list = ["", "", "", "", "",
  "", "", "", ""
];

const bord = $(".bord");

const makeTheList = function () {
  for (let i = 0; i < list.length; i++) {
    const li = $("<li></li>").addClass("cell")

    bord.append(li);
  }
}
makeTheList()
////////// audio///////

var winner = document.querySelector("#myAudioWin");
var losser = document.querySelector("#myAudioLose");

function enableAutoplayWinner() {
  winner.autoplay = true;
  winner.load();
}

function enableAutoplayLosser() {
  losser.autoplay = true;
  losser.load();
}

///  set up the event listener for a card. If a card is clicked:
// display the card's symbol
let counterX = 0;
let tie = 0;
let flag = true;
let cards = $(".cell");
let turen = document.querySelector(".turen");
let move = 0;
let winArry = [];
turen.innerHTML = "The turn is for <b>X</b> user";



/////////// hover change the color ///////
const hoverIn = function () {
  $(this).css("background-color", "#32a8a6");
}
const hoverOut = function () {
  $(this).css("background-color", "#2e3d49");
}
cards.hover(hoverIn,hoverOut );





const checkWinnerOfX = function (cards) {

  if (cards[0].textContent === "X" &&
    cards[1].textContent === "X" &&
    cards[2].textContent === "X") {
    winArry.push(0, 1, 2);
    counterWinerX();
    winnerWindow()
  } else if (cards[3].textContent === "X" &&
    cards[4].textContent === "X" &&
    cards[5].textContent === "X") {
    winArry.push(3, 4, 5);
    counterWinerX();
    winnerWindow();
  } else if (cards[6].textContent === "X" &&
    cards[7].textContent === "X" &&
    cards[8].textContent === "X") {
    winArry.push(6, 7, 8)
    counterWinerX();
    winnerWindow()
  } else if (cards[0].textContent === "X" &&
    cards[3].textContent === "X" &&
    cards[6].textContent === "X") {
    winArry.push(0, 3, 6);
    counterWinerX();
    winnerWindow();
  } else if (cards[1].textContent === "X" &&
    cards[4].textContent === "X" &&
    cards[7].textContent === "X") {
    winArry.push(1, 4, 7);
    counterWinerX();
    winnerWindow()
  } else if (cards[2].textContent === "X" &&
    cards[5].textContent === "X" &&
    cards[8].textContent === "X") {
    winArry.push(2, 5, 8);
    counterWinerX();
    winnerWindow()
  } else if (cards[0].textContent === "X" &&
    cards[4].textContent === "X" &&
    cards[8].textContent === "X") {
    winArry.push(0, 4, 8);
    counterWinerX();
    winnerWindow()
  } else if (cards[2].textContent === "X" &&
    cards[4].textContent === "X" &&
    cards[6].textContent === "X") {
    winArry.push(2, 4, 6);
    counterWinerX();
    winnerWindow()
  }


}

const checkWinnerOfO = function (cards) {

  if (cards[0].textContent === "O" &&
    cards[1].textContent === "O" &&
    cards[2].textContent === "O") {
    winnerWindow()
  } else if (cards[3].textContent === "O" &&
    cards[4].textContent === "O" &&
    cards[5].textContent === "O") {
    winnerWindow()
  } else if (cards[6].textContent === "O" &&
    cards[7].textContent === "O" &&
    cards[8].textContent === "O") {
    winnerWindow()
  } else if (cards[0].textContent === "O" &&
    cards[3].textContent === "O" &&
    cards[6].textContent === "O") {
    winnerWindow()
  } else if (cards[1].textContent === "O" &&
    cards[4].textContent === "O" &&
    cards[7].textContent === "O") {
    winnerWindow()
  } else if (cards[2].textContent === "O" &&
    cards[5].textContent === "O" &&
    cards[8].textContent === "O") {
    winnerWindow()
  } else if (cards[0].textContent === "O" &&
    cards[4].textContent === "O" &&
    cards[8].textContent === "O") {
    winnerWindow()
  } else if (cards[2].textContent === "O" &&
    cards[4].textContent === "O" &&
    cards[6].textContent === "O") {
    winnerWindow()
  }


}
const checkIfTie = function () {
  
  if ((move === 5) && (winArry.length === 0)) {
    console.log('tie');
    tieForBoth();
    tieWindow();
  }
}

let modal = document.querySelector('.modal');
let info = document.querySelector('.info');
let playmore = document.querySelector('button');

function winnerWindow() {
  modal.style.display = 'block';
  enableAutoplayWinner()
  if (winArry != 0) {
    info.innerHTML = '<h1> X user is Won!</h1><br><p> Wooooooo! </p>';
  } else {
    info.innerHTML = '<h1> O user is Won!</h1><br><p> Wooooooo! </p>'
  }


}

function tieWindow() {
  modal.style.display = 'block';
  enableAutoplayLosser()
  info.innerHTML = "<p> it's a Tie </p>";
}
const reset = function(){
  console.log("play agin")
  modal.style.display = 'none';
  $("li").remove();
  move = 0;
  while (winArry.length) {
    winArry.pop();
  }
  console.log(move);
  console.log(winArry);
  /// call them agein //
  turen.innerHTML = "The turn is for <b>X</b> user";
  makeTheList();
  flag = true;
  cards = $(".cell");
  cards.hover(hoverIn,hoverOut );
  clicking();
  
}
playmore.addEventListener('click', reset);



//////////////clicking//////////////
const clickListener = function() {
  
  if (this.innerText === "") {
    /* make sure user not changing the input */
    if (flag) {
      turen.innerHTML = "The turn is for <b>O</b> user "
      this.innerText = "X";
      flag = false;
      move++;
      console.log(move);
      if (move >= 3) {
        console.log(move + " agine");
        checkWinnerOfX(cards);
        console.log("hii")
      }
    } else { // O turn
      this.innerText = "O";
      flag = true;
      turen.innerHTML = "The turn is for <b>X</b> user ";
      checkWinnerOfO(cards);
    }
  } else {
    console.log("it is taken")
  }
  
  checkIfTie()
}
////////////  /////
const clicking = function () {
  console.log("listen clicking")
  for (let i = 0; i < cards.length; i++) {
   cards[i].addEventListener("click", clickListener);
  }
}
 clicking()
////////////////////////


/////// Restart Button //////
let restart = document.querySelector('.restart');
restart.addEventListener('click', (e) => {
  window.location.reload();
});

/////////// result ///////////////////

let winyX = document.querySelector(".winyX");
const counterWinerX = function(){
  counterX +=1;
  winyX.innerHTML = "<p>win: " + counterX + "</p>" ;
}

 let tiediv = document.querySelector(".tieyX");
  const tieForBoth = function(){
  tie +=1;
 tiediv.innerHTML = "<p>tie:  " + tie + "</p>";
 }

