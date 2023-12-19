
for (btn of document.querySelectorAll("button")) {
    btn.addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio("./sounds/tom-1.mp3");
            break;
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            break;
        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            break;
        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            break;
        case 'j':
            var audio = new Audio("./sounds/crash.mp3");
            break;
        case 'k':
            var audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case 'l':
            var audio = new Audio("./sounds/snare.mp3");
            break;
        default:
            console.log(this.innerHTML);
    }
    audio.play();
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}