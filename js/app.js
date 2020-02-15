/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
let game = null;

const btnReset = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
const button = document.querySelectorAll('.key');



btnReset.addEventListener('click',  () => {
    game = new Game();
    game.startGame();
});



qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e);
    }
});



