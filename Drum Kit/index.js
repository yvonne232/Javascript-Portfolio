var buttons = document.querySelectorAll("button");
for (var i = 0, len = buttons.length; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", matchToneMusic2);
}
//.drum means the class

/** 
document.addEventListener("keypress", function(event) {
    console.log(event);
})
*/



function handleClick() {
    alert("I got clicked!");
}

function audioPlay() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }

function changeColor() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    this.style.color = 'white';
  }


function matchToneMusic() {
    this.style.color = 'white';

    var buttonHtml = this.innerHTML;

    switch (buttonHtml) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:  console.log(buttonHTML);
    }
}

/* detect button pressed */

function makeMusic(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:  console.log(buttonHTML);
    }
}

function matchToneMusic2() {
    this.style.color = 'white';
    var buttonHtml = this.innerHTML;    
    makeMusic(buttonHtml);
    buttonAnimation(buttonHtml);
}

/* Detect key pressed*/

document.addEventListener("keypress", function(event) {
    makeMusic(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);

}