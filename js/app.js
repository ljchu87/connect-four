/*----------------- Constants-----------------------*/

const buttonSound = new Audio("../audio/button-sound.wav")
const winningCombos = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
]

/*------------ Variables (state) ---------------------*/

let board, turn, winner

/*----------- Cached Element References ---------------*/

const circleEls = document.querySelector(".grid")
const boardEls = document.querySelectorAll(".grid > div")
const messageEl = document.querySelector("#game-status")
const restartBtn = document.querySelector("#restart-button")
const titleEl = document.querySelector("#game-status")
const soundEls = document.querySelector("grid > div")

/*------------- Event Listeners ----------------------*/

circleEls.addEventListener("click", handleClick)
restartBtn.addEventListener("click", init)

/*------------------ Functions -----------------------*/
init()
function init() {
  titleEl.className = "";
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
  board.forEach(function(circle, idx) {
    if (circle === 1) {
      boardEls[idx].style.backgroundColor = "lime"
    } else if (circle === -1) {
      boardEls[idx].style.backgroundColor = "white"
    } else {
      boardEls[idx].style.background = "url()" /* I purposely left the URL blank because this was an accident that I ended up working with. It made my board transparent which really lets the gradient shine through so I stuck with it */
    }
    setTimeout(function(){
      buttonSound.play()
      })
    })

  if (winner === null) {
    if (turn === 1) {
      messageEl.textContent = "Player 1: It's your turn!"
    } else {
      messageEl.textContent = "Player 2: It's your turn!"
    }
  }
  else if (winner === "T") {
    messageEl.textContent = "It's a tie!"
  } else if (winner === 1) {
    messageEl.textContent = "CONGRATS! Player 1 wins the game!"
    titleEl.className = "animate__animated animate__wobble"
  } else if (winner === -1) {
    messageEl.textContent = "CONGRATS! Player 2 wins the game!"
    titleEl.className = "animate__animated animate__heartBeat"
  }
}

function handleClick(evt){
  let idx = parseInt(evt.target.id.replace("token", ""))
  if (winner === 1 || winner === -1 || winner === "T") {
    return
  }
  if (board[idx]){
    return
  }
  const corrIdx = handlePlacement(idx)
  board[corrIdx] = turn
  turn = turn * -1
  winner = getWinner()
  render()
}

function handlePlacement(idx) {
  for(let i = (idx%7)+ 35; i >= 0; i-=7) {
    if (board[i] === null) {
      return i
    } 
  }
}

function getWinner(){
  let bestCombo = []
  winningCombos.forEach(function(combo){
    let comboValue = board[combo[0]] + board[combo[1]] + board[combo[2]] + board[combo[3]]
    bestCombo.push(Math.abs(comboValue))
  })
  let winnerCombo = bestCombo.some(function(val){
    return val === 4
  })
  
  if (winnerCombo === true) {
      return turn * -1
  } else if (!board.some((value) => value === null)){
    return "T"
  }
  return null
}