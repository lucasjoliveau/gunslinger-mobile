document.addEventListener("DOMContentLoaded", function(event) {


    const selectElement = (element) => document.querySelector(element);

    selectElement('.start-page-btn').addEventListener('click', () => {
        selectElement('.start-page').classList.add('u-hidden');
        selectElement('.game-page').classList.remove('u-hidden');
    });
});
