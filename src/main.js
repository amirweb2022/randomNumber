let randomNumber = Math.trunc(Math.random() * 1000);
const guessNumberInput = document.getElementById("guess-number");
const result = document.getElementById("result");
const heartGame = document.querySelectorAll(".heart");
let index = 0;
let helth = 5;
console.log(randomNumber);
function guessNumber() {
    conditionalCommandGoUp();
    helthGame();
    heart();
}

function conditionalCommandGoUp () {
    // condition go down
    if(guessNumberInput.value > randomNumber) {
        result.innerText = 'چه خبرته؟ بیا پایین تر';
        return;
    }
    // condition go up
    if (guessNumberInput.value < randomNumber) {
        result.innerText = 'برو بالاتر';
        return;
    }
    // condition Successful
    if (guessNumberInput.value == randomNumber) {
        alert("شما برنده شدید");
        if(confirm("آیا میخواهید دوباره بازی کنید?")) {
            location.reload();
        } else {
            window.close();
        }
    }
}
function helthGame () {
    if (guessNumberInput.value !== randomNumber) {
        helth--;
        index++;
    } else {
        helth = 5;
        index = 0;
    }
    if (helth <= 0) {
        alert("شما باختید");
        if(confirm("آیا میخواهید دوباره بازی کنید?")) {
            location.reload();
        } else {
            window.close();
        }
    }
}

function heart () {
    heartGame[index].setAttribute('src', "/src/images/heart-off.png");
}