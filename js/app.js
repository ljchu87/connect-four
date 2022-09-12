/*----------------------- Constants --------------------------------*/



/*--------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------ Cached Element References ------------------------*/

const circleEls = document.querySelector(".grid")
const boardEls = document.querySelectorAll(".grid > div")
const messageEl = document.querySelector("#game-status")
const startBtn = document.querySelector("#start-button")


/*----------------------- Event Listeners -----------------------------*/

circleEls.addEventListener("click", handleClick)
startBtn.addEventListener("click", init)

/*-------------------------- Functions --------------------------------*/

init()
function init() {
  board = [
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
    null, null, null, null, null, null, null, 
  ]
  turn = 1
  winner = null
  render()
}

function render() {
  board.forEach(function(circle, idx){
    circleEls[idx].innerText = circle;
    if (circle === 1) {
      circleEls[idx].textContent = "X"
    }
    else if (circle === -1) {
      circleEls[idx].textContent= "O"
    }
    else {
      circleEls[idx].innerText = ""
    }
  })

  if (!winner){
    messageEl.textContent = "It's a tie!"
  } else if (winner === 1) {
    messageEl.textContent = "CONGRATS! Player 1 wins the game!"
  } else if (winner === -1) {
    messageEl.textContent = "CONGRATS! Player 2 wins the gane!"
  }
}


function handleClick(evt){
  let idx = parseInt(evt.target.id.replace("token", ""))
  console.log("idx that was clicked", idx);

}
