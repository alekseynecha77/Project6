const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector(".btn__reset");
const phraseUl = document.querySelector("#phrase ul");
const phrases = ['Alex is a pro at coding', 'clouds on the top of icloud', 'not enough memory', 'in my phone', 'another time my phone said'];
const phraseArray = getRandomPhraseAsArray(phrases);
const ul = document.querySelector('ul');

btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = "none"

});
let missed = 0;


function getRandomPhraseAsArray(arr){

let random = Math.floor(Math.random() * arr.length);
let randromPhrase = arr[random].toLowerCase();
let splitPhrase = randromPhrase.split('');
return splitPhrase;


}

// Simple console log to check if it worked.
// console.log(getRandomPhraseAsArray(phrases));


function addPhraseToDisplay (arr){
    for(let i =0; i<arr.length; i++){
        const createLi = document.createElement("li");
        createLi.textContent = arr[i];
        phraseUl.appendChild(createLi);
    
    if(arr[i] >= 'A' && arr[i] <= 'Z' || arr[i]>= 'a' && arr[i] <= 'z'){
        createLi.className = "letter";

    }else{
        createLi.className = "space";

        }
    }

}

addPhraseToDisplay(phraseArray);

qwerty.addEventListener('click', (e) => {
    let btn = e.target;
     if(btn.tagName === 'BUTTON'){
         btn.disabled = true;
         btn.className = "chosen";
         let letterFound = checkLetter(btn);
     
     if(letterFound === null){
         const lost = document.querySelectorAll(".tries img")[missed];
         lost.src = "images/lostHeart.png";
         missed++;
         }
     }
     checkWin();
 });

function checkLetter (button){
let match = null;
let selectLi = document.querySelectorAll("li");
for(let i=0; i < selectLi.length; i++){
if(button.textContent === selectLi[i].textContent.toLowerCase()){
    selectLi[i].classList.add('show');
    selectLi[i].style.transition = "all .5s ease";
    match = button .textContent;
    }

}
return match

    }  


    
    
            
    
    function checkWin (){
        const letter = document.querySelectorAll('.letter');
        const show = document.querySelectorAll('.show');
        let title = document.querySelector('.title');
        if(letter.length === show.length){
            disableButtons();
        setTimeout(function () {    
            overlay.className = 'win';
            overlay.style.display = 'flex';
            title.innerHTML = 'YOU WIN!';
            startGame.innerHTML = 'Replay?';
        }, 800);

    } else if(missed > 4){
            disableButtons();
            setTimeout(function () {
                overlay.className = 'lose';
                overlay.style.display = 'flex';
                title.innerHTML = 'YOU LOSE!';
                start.innerHTML = 'Replay?';
             }, 800);
        }
    }

    
function disableButtons () {
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

// RESET GAME after win or loss
function resetGame () {
    missed = 0;
    phraseArray = ''; /*Removing the previous phrase*/
    phraseArray = getRandomPhraseAsArray(phrases); /*Choosing a new phrase*/
    // Remove list items of the last phrase from display
    const removeLi = document.querySelectorAll('ul li');
    for (let i = 0; i < removeLi.length; i++) {
        removeLi[i].remove();
    }
    // Reset all buttons
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].className = '';
    }// Replenish Hearts
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].innerHTML = '<img src="images/liveHeart.png" height="35px" width="30px">';    
    }
        //Add new phrase as li items to screen
        addPhraseToDisplay(phraseArray);
}