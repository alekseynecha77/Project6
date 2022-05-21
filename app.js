const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector(".btn__reset");
const phraseUl = document.querySelector("#phrase ul");
const phrases = ['Alex is a pro at coding', 'clouds on the top of icloud', 'not enough memory', 'grrrrrrrrrrr', 'aaaaaaaa'];
const phraseArray = getRandomPhraseAsArray(phrases);


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
        createLi.classList.add("letter");

    }else{
        createLi.classList.add("space");

        }
    }

}

addPhraseToDisplay(phraseArray);

function checkLetter (button){
let letter = document.querySelectorAll(".letter");
let match = null;
let selectLi = document.querySelectorAll("li");
for(let i=0; i< createLi.length; i++){
if(button.textContent === selectLi[i].textContent.toLowerCase()){
    selectLi[i].classList.add('show');
    match = button .textContent;
    }

}
return match;

    }  
