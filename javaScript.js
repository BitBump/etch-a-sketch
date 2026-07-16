//-GLOBAL VARs---------------------------------------------
const NUMBER_OF_SQUARES = 256;
const SQUARE_SIZE = 50;

let isClicked = false;
let numberOfSquares = 16;

//-HTML REFERENCES-----------------------------------------
const boardDiv = document.getElementById("board");
const promptButton = document.getElementById("promptUser");

//-FUNCTIONS-----------------------------------------------
function createBoard(numberOfSquares){
    
    for(let a = 0; a < numberOfSquares; a++){
        console.log(a);

        for(let b = 0; b < numberOfSquares; b++){            
            
            boardDiv.appendChild(makeASquare(numberOfSquares));

        }

    }

}

function cleanBoard(elementReference){

    while(elementReference.lastElementChild){

        elementReference.removeChild(elementReference.lastElementChild);

    }

}

function checkInputValidity(numberOfSquares){


    while(numberOfSquares < 1 || numberOfSquares > 100){

        numberOfSquares = Number(window.prompt("No can do, Boss! Gimme a number between 1 and 100"));
    }

    return numberOfSquares;

}

function makeASquare(numberOfSquares){

    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("id", "square");
    squareDiv.style.width = calculateSquareSize(numberOfSquares);
    squareDiv.style.height =calculateSquareSize(numberOfSquares);

    return squareDiv;
    
}

function calculateSquareSize(numberOfSquares){

    return `${boardDiv.offsetWidth / numberOfSquares}px`;

}

//-EVENT LISTENERS-----------------------------------------
boardDiv.addEventListener("mouseup",    (event) => { isClicked = false });
boardDiv.addEventListener("mousedown",  (event) => { isClicked = true });
boardDiv.addEventListener("mouseleave", (event) => { isClicked = false })
boardDiv.addEventListener("mousemove",  (event) => {

    if(!isClicked){return;}

    event.target.style.backgroundColor = "black";    

});

promptButton.addEventListener("click", () => {

    cleanBoard(boardDiv);    
    createBoard(checkInputValidity(numberOfSquares = Number(window.prompt("Input a number", "16"))));

});

//-FUNCTIONS CALLS-----------------------------------------
