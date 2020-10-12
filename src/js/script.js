document.addEventListener("DOMContentLoaded", function(event) {
    // Select element
    const selectElement = (element) => document.querySelector(element);

    // Select button of the home page & navigate to the game page when the button is clicked
    selectElement('.start-page-btn').addEventListener('click', () => {
        selectElement('.start-page').classList.add('u-hidden');
        selectElement('.game-page').classList.remove('u-hidden');
    });

    // Select button to quit the game & navigate to the home page when the button is clicked
    selectElement('.quit-game').addEventListener('click', () => {
        selectElement('.congrats-page').classList.add('u-hidden');
        selectElement('.start-page').classList.remove('u-hidden');
    });

    // When "esquive à gauche" button is clicked
    selectElement('.btn-p2-p1').addEventListener('click', () => {console.log('Esquive à gauche');});

    // When "esquive à droite" button is clicked
    selectElement('.btn-p2-p2').addEventListener('click', () => {console.log('Esquive à droite');});

    // When "tirer" button is clicked
    selectElement('.btn-p2-p3').addEventListener('click', () => {console.log('Tirer');});


});
