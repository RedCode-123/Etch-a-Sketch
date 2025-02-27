"use strict";

// const board = document.querySelector(".board");
const body = document.querySelector("body");

let boxNumber = 16;
let boxSize = 256/boxNumber;

let board = document.createElement("div");
board.classList.add("board");
// board.style.width = "240px";
// board.style.height = "240px";
body.appendChild(board);


const boxNumberButton = document.querySelector("#box-number");
boxNumberButton.addEventListener("click", () => {

    while(true){
        boxNumber = Number(prompt("Grid size (1-100)"));
        if (boxNumber > 100) {
            alert("Squares must be less than 101");
        } else {
            break;
         }
    }

    boxSize = 256/boxNumber;
    board.remove();
    board = document.createElement("div");
    board.classList.add("board");
    body.appendChild(board);
    main()
})

function main() {
    // let boxList = [];
    let totalBoxes = boxNumber**2;
    for (let x = 0; x<=(totalBoxes-1); x++) {
        let boardBox = document.createElement("div");
        boardBox.setAttribute("class","box-"+x);
        boardBox.style.width = boxSize.toString() + "px";
        boardBox.style.height = boxSize.toString() + "px";
        // boardBox.style.margin = "0px";
        boardBox.style.outline = "1px solid black";
        boardBox.addEventListener("mouseenter", () => {
            boardBox.style['background-color'] = 'black';
        });
        board.appendChild(boardBox);
        // boxList.push(boardBox);
    }
}

main()
