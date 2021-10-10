

window.onload = function () {
    let grid = new Array(9).fill(" ");
    let status = document.getElementById("status")
    let board = document.getElementById("board");
    let boardDivs = [...board.children];
    let gameWon = false
    

    var nextPlay = ["X", "O"][Math.round(Math.random())];
    
    //Adds the appropriate class names as well as listeners to the squares
    boardDivs.forEach((div, index) => {  
        div.className = "square"
        div.id = `${index}`

        //Add letter to square when user clicks it
        div.addEventListener('click', () => {
            if(div.innerHTML === "" && !gameWon){
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
        
        if(checkPossibility("XXX")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! X is the Winner!"
            gameWon = true
        } else if(checkPossibility("OOO")){
            status.classList.add("you-won")
            status.innerHTML = "Congratulations! O is the Winner!"
            gameWon = true
        }
    }

    //Check winning possibilities
    const checkPossibility = (str) => {
        let gridstr = grid.join("")
        let row = gridstr.slice(0, 3).includes(str) || gridstr.slice(3, 6).includes(str) || gridstr.slice(6, 9).includes(str)
        let column = (grid[0] + grid[3] + grid[6]).includes(str) || (grid[1] + grid[4] + grid[7]).includes(str) || (grid[2] + grid[5] + grid[8]).includes(str) 
        let diagonal = (grid[0] + grid[4] + grid[8]).includes(str) || (grid[2] + grid[4] + grid[6]).includes(str) 

        return row || column || diagonal

    }

    //Reset button listen
    let btn = document.getElementsByClassName("btn")[0]
    btn.addEventListener('click', () => {
        grid = new Array(9).fill(" ");
        status.classList.remove("you-won")
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."
        gameWon = false
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


