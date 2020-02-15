/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
let game = null;

const btnReset = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');


btnReset.addEventListener('click',  () => {
    game = new Game();
    game.startGame();
});



qwerty.addEventListener('click', (e) => {
        game.handleInteraction(e);
});

qwerty.addEventListener('keypress', (e) => {
    game.handleInteraction(e);
});

