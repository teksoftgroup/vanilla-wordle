document.addEventListener('DOMContentLoaded', () => {

    createTiles();

    const keys = document.querySelectorAll('.keyboard-row button');
    let guessedWords = [[]];
    let availableSpace = 1;

    for(let i = 0; i < keys.length; i++){
        keys[i].onclick = ({target}) => {
            const letter = target.getAttribute('data-key');
            console.log(letter);
            updateGuessedWords(letter);
        }; 
    }


    function getCurrentWordArray(){
        const numberOfguesses = guessedWords.length;
        return guessedWords[numberOfguesses - 1];
    }

    function updateGuessedWords(letter){
        const currentWord = getCurrentWordArray();

        if(currentWord && currentWord.length < 5){
            currentWord.push(letter);
            const availableSpaceEL = document.getElementById(String(availableSpace));
            availableSpace = availableSpace + 1
            availableSpaceEL.textContent = letter;
        }
    }

    function createTiles(){
        const gameBoard = document.getElementById('board');
        for (let i = 0; i < 30; i++){
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.setAttribute("id", i + 1);
            gameBoard.appendChild(tile);
        }
    }


})