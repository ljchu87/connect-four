/*----------------------- Constants --------------------------------*/



/*--------------------- Variables (state) ----------------------------*/

let connectGrid, turn, winner

/*------------------ Cached Element References ------------------------*/

const circleEls = document.querySelector(".grid")

/*----------------------- Event Listeners -----------------------------*/

circleEls.addEventListener("click", handleClick)

/*-------------------------- Functions --------------------------------*/

init()
function init() {
  connectGrid = [
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
  connectGrid.forEach (function (){
    console.log(evt.target.id);
  })
}