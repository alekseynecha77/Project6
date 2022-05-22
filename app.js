const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector(".btn__reset");
const phraseUl = document.querySelector("#phrase ul");
const phrases = ['Alex is a pro at coding', 'clouds on the top of icloud', 'not enough memory', 'grrrrrrrrrrr', 'aaaaaaaa'];
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


    
     function reloadGame(){
         btnReset.addEventListener('click', (e) =>{
             ul.style.display = 'none';
            location.reload();

         });

    }

    function checkWin (){
        const letter = document.querySelectorAll('.letter');
        const show = document.querySelectorAll('.show');
        let title = document.querySelector('.title');
        if(letter.length === show.length){
            overlay.className = 'win';
            title.textContent = 'wow you won, you probably have big IQ';
            overlay.style.display ='flex';
            btnReset.style.display = 'none';

        }
        else if(missed > 4){
            overlay.className = 'lose';
            title.textContent = 'oops you lost';
            overlay.style.display ='flex';
            btnReset.style.display = 'none';
        }
        reloadGame();

    }

