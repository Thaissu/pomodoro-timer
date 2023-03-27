import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,} from "./elements.js"

//para acessar um elemento html usar queryselector('eg: .play, #timer') 
//funcao setTimeout  primeiro coloca a funcao depois o tempo em milisegundos 1000ms=1s
//programacao imperativa = ordens passo a passo
//addEventListener eh uma funcao callback precisar do evento, funcao


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
 
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
  
})

const sound = Sound()

  buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countDown()
  sound.pressButton()

  })

  buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()
  
  })

  buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressButton()
  })

  buttonSoundOff.addEventListener('click', function(){
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.play()
 

  })

  buttonSoundOn.addEventListener('click', function(){
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.pause()
  
  })

  buttonSet.addEventListener('click', function(){
     let newMinutes = controls.getMinutes()

      if (!newMinutes){
    timer.reset()
    
    return
   
    
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
  
  })