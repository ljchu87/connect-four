/*----------------------- Constants --------------------------------*/



/*--------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------ Cached Element References ------------------------*/

const circleEls = document.querySelector(".grid")
const boardEls = document.querySelectorAll(".grid > div")


/*----------------------- Event Listeners -----------------------------*/

circleEls.addEventListener("click", handleClick)

/*-------------------------- Functions --------------------------------*/

init()
function init() {
  boardArr = [
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

function handleClick(evt){
  let idx = parseInt(evt.target.id.replace("token", ""))
  console.log("idx that was clicked", idx);
}

