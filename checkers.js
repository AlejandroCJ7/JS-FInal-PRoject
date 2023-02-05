
var redPieces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var blackPieces = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var currentPlayer = "red";


let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId);
    return board.indexOf(parsed);
};

const cells = document.querySelectorAll("td");
let redsPieces = document.querySelectorAll("p")
let blacksPieces = document.querySelectorAll("span")

let turn = true;
let redScore = 12;
let blackScore = 12;
let playerPieces;
let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
}

function givePiecesEventListeners() {
    if (turn) {
        for (let i = 0; i < redsPieces.length; i++) {
            redsPieces[i].addEventListener("click", getPlayerPieces);
        }
    } else {
        for (let i = 0; i < blacksPieces.length; i++) {
            blacksPieces[i].addEventListener("click", getPlayerPieces);
        }
    }
}

function getPlayerPieces() {
    if (turn) {
        playerPieces = redsPieces;
    } else {
        playerPieces = blacksPieces;
    }
    removeCellonclick();
    resetBorders();
}

function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
}

function resetBorders() {
    for (let i = 0; i < playerPieces.length; i++) {
        playerPieces[i].style.border = "1px solid white";
    }
    resetSelectedPieceProperties();
}

function resetSelectedPieceProperties() {
    selectedPiece.pieceId = -1;
    selectedPiece.pieceId = -1;
    selectedPiece.isKing = false;
    selectedPiece.seventhSpace = false;
    selectedPiece.ninthSpace = false;
    selectedPiece.fourteenthSpace = false;
    selectedPiece.eighteenthSpace = false;
    selectedPiece.minusSeventhSpace = false;
    selectedPiece.minusNinthSpace = false;
    selectedPiece.minusFourteenthSpace = false;
    selectedPiece.minusEighteenthSpace = false;
}