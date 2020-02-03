
let list = [ "","","","","",
                "","","",""];

const bord = $(".bord");

const makeTheList = function(){
    // shuffle(list);
    for (let i=0; i < list.length; i++){
       const li = $("<li></li>").addClass("cell")
     
        bord.append(li);
       }
    }


makeTheList()

///  set up the event listener for a card. If a card is clicked:
// display the card's symbol

let flag = true;
const cards = $(".cell");
let turen = document.querySelector(".turen");
let move = 0;
const winArry =[];
turen.innerHTML = "It is X Turn "

for (let i=0; i < cards.length ;  i++){
    let card = cards[i];
    card.addEventListener("click", function(){
      if (card.innerText === "" ) { /* make sure user not changing the input */
          if ( flag){
            turen.innerHTML = "It is O Turn "
            card.innerText = "X";
            flag = false;
            move ++;
            
            console.log(move);
            if (move >= 3) {
                checkWinnerOfX(cards);
            }
          } else {
             card.innerText = "O";
             flag = true;
             turen.innerHTML = "It is X Turn"
             checkWinnerOfO(cards);
            }
        } else {
          console.log("it is taken")
        }
        if (move === 5 && winArry === 0)
        {
            console.log('tie')
            tieWindow()
        }
    })
      
     
}
console.log(cards.length)

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

let modal = document.querySelector('.modal');
let info = document.querySelector('.info');
let playmore = document.querySelector('button');
function winnerWindow()
   {
     modal.style.display = 'block';
    
     info.innerHTML = '<h1> You Won!</h1><br><p> With total move of <br> Wooooooo! </p>';
 }
 function tieWindow()
   {
     modal.style.display = 'block';
    
     info.innerHTML = '<p> its Tie </p>';
    }
  playmore.addEventListener('click', function()
{
    modal.style.display = 'none';
    window.location.reload();


});
