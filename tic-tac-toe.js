
window.onload = function () {
    let board = document.getElementById("board");
    let boardDivs = [...board.children];
    let grid = new Array(9).fill("");

    var nextPlay = ["X", "O"][Math.round(Math.random())];
    
    boardDivs.forEach((div, index) => {  
        div.className = "square"
        div.id = `${index}`

        div.addEventListener('click', () => {
            div.classList.add(nextPlay)
            div.innerHTML = nextPlay;
            
            grid[parseInt(div.id)] = nextPlay
            nextPlay = nextPlay === "X" ? "O" : "X";      
        })
    })
    
    
}
