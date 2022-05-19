const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector(".btn__reset");
const phrases = ['Alex is a pro at coding', 'clouds on the top of icloud', 'not enough memory', 'grrrrrrrrrrr', 'aaaaaaaa', 'ouch'];


btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = "none"

});
let missed = 0;

function getRandomPhraseAsArray(arr){

let random = Math.floor(Math.random() * arr.length);



}