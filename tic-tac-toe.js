

window.onload = function () {
    let grid = new Array(9).fill("");
    let status = document.getElementById("status")
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
            checkGrid()
            nextPlay = nextPlay === "X" ? "O" : "X";      
        })

        div.addEventListener('mouseover', () => {
            div.classList.add("hover")
        })

        div.addEventListener('mouseout', () => {
            div.classList.remove("hover")
        })
    })
    
    const checkGrid = () => {
    
        let gridstr = grid.join("")
        console.log(gridstr)
        if(gridstr.includes("XXX")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! X is the Winner!"
        } else if(gridstr.includes("OOO")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! O is the Winner!"
        }
    }

    let btn = document.getElementsByClassName("btn")[0]
    btn.addEventListener('click', () => {
        status.classList.remove("you-won")
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."
        boardDivs.forEach(div => {
            if(div.classList.contains("X")){
                div.classList.remove("X")
            }else if(div.classList.contains("O")){
                div.classList.remove("O")
            }
            div.innerHTML = ""
        })
    })
}


