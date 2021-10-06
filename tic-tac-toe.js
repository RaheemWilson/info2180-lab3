let grid = new Array(9).fill("");

window.onload = function () {
    let board = document.getElementById("board");
    let boardDivs = [...board.children];
    

    var nextPlay = ["X", "O"][Math.round(Math.random())];
    
    boardDivs.forEach((div, index) => {  
        div.className = "square"
        div.id = `${index}`

        div.addEventListener('click', () => {
            div.classList.add(nextPlay)
            div.innerHTML = nextPlay;
            grid[parseInt(div.id)] = nextPlay
            // checkGrid()
            nextPlay = nextPlay === "X" ? "O" : "X";      
        })

        div.addEventListener('mouseover', () => {
            div.classList.add("hover")
        })

        div.addEventListener('mouseout', () => {
            div.classList.remove("hover")
        })
    })
}


