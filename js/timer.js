import Sounds from "./sounds.js"

const sound = Sounds()
export default function Timer({

  minutesDisplay,
  secondsDisplay,
  resetControls,
  
  
}) {

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

//ternario = se minutes for indefinido, coloque minutes se nao coloque newMinutes



function updateDisplay(newMinutes, seconds){

  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
 
}

function reset(){
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}
function countDown(){
  timerTimeOut= setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes<=0 && seconds<=0
    
  updateDisplay(minutes, 0)
    
  if (isFinished){
  resetControls()
  updateDisplay()
  Sounds().timeEnd()
  return
   }
    
  if (seconds <= 0) {
  seconds = 60
  -- minutes
  }

 updateDisplay(minutes, String(seconds - 1))
  
//padStart - preeche caracteres
    
  countDown()
  }, 1000)
 
  }
function hold(){
  clearTimeout(timerTimeOut)
}


function updateMinutes(newMinutes){
  minutes = newMinutes

}

return {

  
  countDown,
  reset,
  updateDisplay,
  updateMinutes,
  hold
}}

