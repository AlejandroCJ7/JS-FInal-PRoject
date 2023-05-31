

//Created a visual representation of the board, with the 'null' representing each block
const board = [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null,
]


//parses piece IDs and returns index of specific piece on the board
let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId);
    return board.indexOf(parsed);
};


//DOM
const blocks = document.querySelectorAll('td');
let redPieces = document.querySelectorAll('p');
let blackPieces = document.querySelectorAll('span');
const redsTurnText = document.querySelectorAll(".reds-turn");
const blacksTurntext = document.querySelectorAll(".blacks-turn");


//players properties
let turn = true;
let redScore = 12;
let blackScore = 12;
let playerPieces;


//selected piece properties
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


//gets event listeners ready for piecess
function givePiecesEventListeners() {
    if (turn) {
        for (let i = 0; i < redPieces.length; i++) {
            redPieces[i].addEventListener("click", getPlayerPieces);
        }
    } else {
        for (let i = 0; i < blackPieces.length; i++) {
            blackPieces[i].addEventListener("click", getPlayerPieces);
        }
    }
}

//length of players peice count
function getPlayerPieces() {
    if (turn) {
        playerPieces = redPieces;
    } else {
        playerPieces = blackPieces;
    }
    removeBlockonclick();
    resetBorders();
}

//removes old selected pieces becausee the player might reselect
function removeBlockonclick() {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].removeAttribute("onclick");
    }
}

// resets borders to original
function resetBorders() {
    for (let i = 0; i < playerPieces.length; i++) {
        playerPieces[i].style.border = "1px solid white";
    }
    resetSelectedPieceProperties();
    getSelectedPiece();
}

// resets selected pieces
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

// function gets ID/index of where the block is on the board
function getSelectedPiece() {
    selectedPiece.pieceId = parseInt(eventObj.target.id);
    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
    isPieceKing();
}

// functions checks if the piece is king
function isPieceKing() {
    if (document.getElementById(selectedPiece.pieceId).classList.contains("king")) {
        selectedPiece.isKing = true;
    } else {
        selectedPiece.isKing = false;
    }
    getAvailableSpaces();
}

// moves that the selected piece is able to make
function getAvailableSpaces() {
    if (board[selectedPiece.indexOfBoardPiece + 7] === null && 
        blocks[selectedPiece.indexOfBoardPiece + 7].classList.contains("noPiece") !== true) {
        selectedPiece.seventhSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece + 9] === null && 
        blocks[selectedPiece.indexOfBoardPiece + 9].classList.contains("noPiece") !== true) {
        selectedPiece.ninthSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece - 7] === null && 
        blocks[selectedPiece.indexOfBoardPiece - 7].classList.contains("noPiece") !== true) {
        selectedPiece.minusSeventhSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece - 9] === null && 
        blocks[selectedPiece.indexOfBoardPiece - 9].classList.contains("noPiece") !== true) {
        selectedPiece.minusNinthSpace = true;
    }
    checkAvailableJumpSpaces();
}

// moves that the selected piece can jump
function checkAvailableJumpSpaces() {
    if (turn) {
        if (board[selectedPiece.indexOfBoardPiece + 14] !== null 
        && blocks[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPiece") !== true
        && board[selectedpiece.indexOfBoardPiece + 7] >= 12) {
            selectedPiece.fourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece + 18] === null 
            && blocks[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPiece") !== true
            && board[selectedPiece.indexOfBoardPiece + 9] >= 12) {
                selectedPiece.eighteenthSpace = true;
            }
            if (board[selectedPiece.indexOfBoardPiece - 14] === null 
            && blocks[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPiece") !== true
            && board[selectedPiece.indexOfBoardPiece - 7] >= 12) {
                selectedPiece.minusFourteenthSpace = true;
            }
            if (board[selectedPiece.indexOfBoardPiece - 18] === null 
            && blocks[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPiece") !== true
            && board[selectedPiece.indexOfBoardPiece - 9] >= 12) {
                selectedPiece.minusEighteenthSpace = true;
            }
        } else {
            if (board[selectedPiece.indexOfBoardPiece + 14] === null 
            && blocks[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPiece") !== true
            && board[selectedPiece.indexOfBoardPiece + 7] < 12 && board[selectedPiece.indexOfBoardPiece + 7] !== null) {
                selectedPiece.fourteenthSpace = true;
            }
            if (board[selectedPiece.indexOfBoardPiece + 18] === null 
            && blocks[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPiece") !== true
            && board[selectedPiece.indexOfBoardPiece + 9] < 12 && board[selectedPiece.indexOfBoardPiece + 9] !== null) {
                selectedPiece.eighteenthSpace = true;
            }
            if (board[selectedPiece.indexOfBoardPiece - 14] === null && blocks[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPiece") !== true
            && board[selectedPiece.indexOfBoardPiece - 7] < 12 
            && board[selectedPiece.indexOfBoardPiece - 7] !== null) {
                selectedPiece.minusFourteenthSpace = true;
            }
            if (board[selectedPiece.indexOfBoardPiece - 18] === null && blocks[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPiece") !== true
            && board[selectedPiece.indexOfBoardPiece - 9] < 12
            && board[selectedPiece.indexOfBoardPiece - 9] !== null) {
                selectedPiece.minusEighteenthSpace = true;
            }
        }
        givePieceBorder();
    }
    

// gives the selected piece a green hue to show it can move
function givePieceBorder() {
    if (selectedPiece.seventhSpace || selectedPiece.ninthSpace || selectedPiece.fourteenthSpace || selectedPiece.eighteenthSpace
    || selectedPiece.minusSeventhSpace || selectedPiece.minusNinthSpace || selectedPiece.minusFourteenthSpace || selectedPiece.minusEighteenthSpace) {
        document.getElementById(selectedPiece.pieceId).style.border = "3px solid green";
        giveBlocksClick();
    } else {
        return;
    }
}


// gives the blocks on the board a 'click' bassed on the possible moves (still working...)
function giveBlocksClick() {
    