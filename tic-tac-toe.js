

window.onload = function () {
    let grid = new Array(9).fill(" ");
    let status = document.getElementById("status")
    let board = document.getElementById("board");
    let boardDivs = [...board.children];
    

    var nextPlay = ["X", "O"][Math.round(Math.random())];
    
    //Adds the appropriate class names as well as listeners to the squares
    boardDivs.forEach((div, index) => {  
        div.className = "square"
        div.id = `${index}`

        //Add letter to square when user clicks it
        div.addEventListener('click', () => {
            if(div.innerHTML === ""){
                div.classList.add(nextPlay)
                div.innerHTML = nextPlay;
                grid[parseInt(div.id)] = nextPlay
                checkGrid()
                nextPlay = nextPlay === "X" ? "O" : "X";      
            }
        })

        //Hover effect enabled
        div.addEventListener('mouseover', () => {
            div.classList.add("hover")
        })
        //Hover effect disabled
        div.addEventListener('mouseout', () => {
            div.classList.remove("hover")
        })
    })
    
    //Function to check who wins
    const checkGrid = () => {
        let gridstr = grid.join("")
        if(gridstr.slice(0, 3).includes("XXX") || gridstr.slice(3, 6).includes("XXX") || gridstr.slice(6, 9).includes("XXX")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! X is the Winner!"
        } else if(gridstr.slice(0, 3).includes("OOO") || gridstr.slice(3, 6).includes("OOO") || gridstr.slice(6, 9).includes("OOO")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! O is the Winner!"
        }
    }

    //Reset button listener
    let btn = document.getElementsByClassName("btn")[0]
    btn.addEventListener('click', () => {
        grid = new Array(9).fill(" ");
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


