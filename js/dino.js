const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const count = document.getElementById('count');
let outputInt = parseInt(count.textContent);
outputInt = "0";
count.textContent = outputInt;


function jump() {
    if(dino.classList != 'jump') {
        dino.classList.add('jump');

        setTimeout(function() {
            dino.classList.remove('jump');
        }, 300)
    }
}

let isAlive = setInterval( function() {

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    console.log(dinoTop);

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Oh no! you hit a star. Your score was: ' + outputInt);
        outputInt = "0";
        count.textContent = outputInt;
    }
    if(cactusLeft < 50 && dinoTop == 80){
        outputInt++;
        count.textContent = outputInt;
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});