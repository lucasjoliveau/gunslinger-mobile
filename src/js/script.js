document.addEventListener("DOMContentLoaded", function(event) {


    const selectElement = (element) => document.querySelector(element);

    selectElement('.start-page-btn').addEventListener('click', () => {
        selectElement('.start-page').classList.add('u-hidden');
        selectElement('.game-page').classList.remove('u-hidden');
    });

    selectElement('.btn-p2-p1').addEventListener('click', () => {
        selectElement('.game-page').classList.add('u-hidden');
        selectElement('.congrats-page').classList.remove('u-hidden');
    });

    selectElement('.quit-game').addEventListener('click', () => {
     selectElement('.congrats-page').classList.add('u-hidden');
     selectElement('.start-page').classList.remove('u-hidden');
    });
});
