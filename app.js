const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector(".btn__reset");
const phraseUl = document.querySelector("#phrase ul");
const phrases = [
  "Alex is a pro at coding",
  "clouds on the top of icloud",
  "not enough memory",
  "in my phone",
  "another time my phone said",
];
const phraseArray = getRandomPhraseAsArray(phrases);
const ul = document.querySelector("ul");

const tries = document.querySelectorAll("li.tries");

btnReset.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "none";
});
let missed = 0;

function getRandomPhraseAsArray(arr) {
  let random = Math.floor(Math.random() * arr.length);
  let randromPhrase = arr[random].toLowerCase();
  let splitPhrase = randromPhrase.split("");
  return splitPhrase;
}

// Simple console log to check if it worked.
// console.log(getRandomPhraseAsArray(phrases));

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const createLi = document.createElement("li");
    createLi.textContent = arr[i];
    phraseUl.appendChild(createLi);

    if ((arr[i] >= "A" && arr[i] <= "Z") || (arr[i] >= "a" && arr[i] <= "z")) {
      createLi.className = "letter";
    } else {
      createLi.className = "space";
    }
  }
}

addPhraseToDisplay(phraseArray);

qwerty.addEventListener("click", (e) => {
  let btn = e.target;
  if (btn.tagName === "BUTTON") {
    btn.disabled = true;
    btn.className = "chosen";
    let letterFound = checkLetter(btn);

    if (letterFound === null) {
      const lost = document.querySelectorAll(".tries img")[missed];
      lost.src = "images/lostHeart.png";
      missed++;
    }
  }
  checkWin();
});

function checkLetter(button) {
  let match = null;
  let selectLi = document.querySelectorAll("li");
  for (let i = 0; i < selectLi.length; i++) {
    if (button.textContent === selectLi[i].textContent.toLowerCase()) {
      selectLi[i].classList.add("show");
      selectLi[i].style.transition = "all 1.5s ease-out ";
      match = button.textContent;
    }
  }
  return match;
}

// RESET GAME after win or loss

function resetGame() {
  const buttons = document.getElementsByTagName("button");
  const li = document.querySelectorAll("ul");
  overlay.className = "start";
  li.innerHTML = " ";
  missed = 0;

  /* RESETS THE HEARTS */
  for (let i = 0; i < tries.length; i++) {
    tries[i].firstElementChild.src = "images/liveHeart.png";
  }

  /* RESETS LI */ 
  for (let i = 0; i < li.length; i++) {
    li[i].className = "";
    li[i].textContent = "";
  }

  /* RESETS THE CHOSEN KEYBOARD KEYS */
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = "";
    buttons[i].disabled = false;
  }

  //Add new phrase as li items to screen
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
}

function checkWin() {
  const show = document.getElementsByClassName("show");
  const letters = document.getElementsByClassName("letter");
  if (letters.length === show.length) {
    overlay.classList.add("win");
    overlay.style.display = "flex";
    overlay.children[0].textContent = "SUCCESS!";
    overlay.children[1].textContent = "Restart?";
    resetGame();
  } else if (missed >= 5) {
    overlay.classList.add("lose");
    overlay.style.display = "flex";
    overlay.children[0].textContent = "FAILURE!";
    overlay.children[1].textContent = "Restart?";
    resetGame();
  }
}
