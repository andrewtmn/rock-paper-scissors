
let selections = document.querySelectorAll('button');
let resultText = document.getElementById('round-result');

selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        console.log(selection.id);
        let result = playRound(selection.id, computerPlay());
        resultText.textContent = result;

        checkIfGameOver();
    });
})








