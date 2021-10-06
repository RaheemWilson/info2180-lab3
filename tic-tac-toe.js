
window.onload = function () {
    let board = document.getElementById("board");
    let boardDivs = [...board.children]


    for(let i = 0; i < boardDivs.length; i++){
        boardDivs[i].className = "square"
    }
}
