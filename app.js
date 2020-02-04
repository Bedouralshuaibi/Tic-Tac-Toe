
let list = [ "","","","","",
                "","","",""];

const bord = $(".bord");

const makeTheList = function(){
    for (let i=0; i < list.length; i++){
       const li = $("<li></li>").addClass("cell")
     
        bord.append(li);
       }
    }
makeTheList()
////////// audio///////

var winner = document.querySelector("#myAudioWin");
var losser= document.querySelector("#myAudioLose");
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

let flag = true;
const cards = $(".cell");
let turen = document.querySelector(".turen");
let move = 0;
let winArry =[];
turen.innerHTML = "The turn is for <b>X</b> user";

/////////// hover change the color ///////

cards.hover(function(){
  $(this).css("background-color", "#32a8a6");
  }, function(){
  $(this).css("background-color", "#2e3d49");
});

///////////////////////////////
for (let i=0; i < cards.length ;  i++){
    let card = cards[i];
    card.addEventListener("click", function(){
      if (card.innerText === "" ) { /* make sure user not changing the input */
          if ( flag) {
            turen.innerHTML = "The turn is for <b>O</b> user "
            card.innerText = "X";
            flag = false;
            move ++;
            console.log(move);
            if (move >= 3) {
                checkWinnerOfX(cards);    
            }
          } else {  // O turn
             card.innerText = "O";
             flag = true;
             turen.innerHTML = "The turn is for <b>X</b> user ";
             checkWinnerOfO(cards);
          }
      } else {
          console.log("it is taken")
        }
      checkIfTie()
       
        
    })
      
     
}

const checkWinnerOfX = function(cards){
    
     if (cards[0].textContent === "X" &&
         cards[1].textContent === "X" &&
         cards[2].textContent === "X" )
          {  winArry.push(0,1,2)
              winnerWindow()}
        else if(cards[3].textContent === "X" &&
          cards[4].textContent === "X" &&
          cards[5].textContent === "X" )
           {  winArry.push(3,4,5)
               winnerWindow()} 
        else if(cards[6].textContent === "X" &&
          cards[7].textContent === "X" &&
          cards[8].textContent === "X" )
           {   winArry.push(6,7,8)
               winnerWindow()} 

        else if(cards[0].textContent === "X" &&
          cards[3].textContent === "X" &&
          cards[6].textContent === "X" )
           {  winArry.push(0,3,6)
               winnerWindow()}
        else if(cards[1].textContent === "X" &&
          cards[4].textContent === "X" &&
          cards[7].textContent === "X" )
           {    winArry.push(1,4,7)
                winnerWindow()}  
        else if(cards[2].textContent === "X" &&
          cards[5].textContent === "X" &&
          cards[8].textContent === "X" )
           {  winArry.push(2,5,8)
               winnerWindow()} 

        else if(cards[0].textContent === "X" &&
          cards[4].textContent === "X" &&
          cards[8].textContent === "X" )
           {  winArry.push(0,4,8)
               winnerWindow()} 
        else if(cards[2].textContent === "X" &&
           cards[4].textContent === "X" &&
           cards[6].textContent === "X" )
            {  winArry.push(2,4,6)
                winnerWindow()} 
                
            
}

const checkWinnerOfO= function(cards){
          
      if (cards[0].textContent === "O" &&
         cards[1].textContent === "O" &&
         cards[2].textContent === "O" )
          {  winnerWindow()}
        else if(cards[3].textContent === "O" &&
          cards[4].textContent === "O" &&
          cards[5].textContent === "O" )
           {  winnerWindow()} 
        else if(cards[6].textContent === "O" &&
          cards[7].textContent === "O" &&
          cards[8].textContent === "O" )
           {  winnerWindow()} 

        else if(cards[0].textContent === "O" &&
          cards[3].textContent === "O" &&
          cards[6].textContent === "O" )
           {  winnerWindow()}
        else if(cards[1].textContent === "O" &&
          cards[4].textContent === "O" &&
          cards[7].textContent === "O" )
           {  winnerWindow()}  
        else if(cards[2].textContent === "O" &&
          cards[5].textContent === "O" &&
          cards[8].textContent === "O" )
           {  winnerWindow()} 

        else if(cards[0].textContent === "O" &&
          cards[4].textContent === "O" &&
          cards[8].textContent === "O" )
           { winnerWindow()} 
        else if(cards[2].textContent === "O" &&
           cards[4].textContent === "O" &&
           cards[6].textContent === "O" )
            { winnerWindow()} 

  
}
 const checkIfTie = function(){
  if ((move === 5)&& (winArry.length === 0))
   {
   console.log('tie');
   tieWindow(); 
   }
 }

let modal = document.querySelector('.modal');
let info = document.querySelector('.info');
let playmore = document.querySelector('button');
function winnerWindow()
   {
     modal.style.display = 'block';
     enableAutoplayWinner()
     if (winArry != 0){
     info.innerHTML = '<h1> X user is Won!</h1><br><p> <br> Wooooooo! </p>';
     } else {info.innerHTML = '<h1> O user is Won!</h1><br><p> <br> Wooooooo! </p>'}
      
    
 }
 function tieWindow()
   {
     modal.style.display = 'block';
     enableAutoplayLosser() 
     info.innerHTML = "<p> it's a Tie </p>";
    }
  playmore.addEventListener('click', function()
{
    modal.style.display = 'none';
    window.location.reload();


});


/////// Restart Button //////
let restart = document.querySelector('.restart');
  restart.addEventListener('click', (e) =>{
    window.location.reload();});

