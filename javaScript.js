//-GLOBAL VARs---------------------------------------------
const NUMBER_OF_SQUARES = 256;
const SQUARE_SIZE = 50;

let isClicked = false;

//-HTML REFERENCES-----------------------------------------
const boardDiv = document.getElementById("board");

//-FUNCTIONS-----------------------------------------------
function createBoard(){

    //Calculate board-side length
    boardDiv.setAttribute("style",`width: ${Math.sqrt(NUMBER_OF_SQUARES)* SQUARE_SIZE}px`);
    

    for(let i=0; i<NUMBER_OF_SQUARES; i++){

        const squareDiv = document.createElement("div");
        squareDiv.setAttribute("id", "square");
        squareDiv.style.width = `${SQUARE_SIZE}px`;
        squareDiv.style.height = `${SQUARE_SIZE}px`;
        
        boardDiv.appendChild(squareDiv);        

    }

}

//-EVENT LISTENERS-----------------------------------------
boardDiv.addEventListener("mouseup",    (event) => { isClicked = false });
boardDiv.addEventListener("mousedown",  (event) => { isClicked = true });
boardDiv.addEventListener("mouseleave", (event) => { isClicked = false })
boardDiv.addEventListener("mousemove",  (event) => {

    if(!isClicked){return;}

    event.target.style.backgroundColor = "black";    

});

//-FUNCTIONS CALLS-----------------------------------------
createBoard();