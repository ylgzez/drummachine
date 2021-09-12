import React from "react"
import { useDrumContext } from "./context"

const DrumPad = ({audio, audioName, keyName}) => {
  const {powerOn, volume, updateDisplay} = useDrumContext()
  const handleClick = () => {
    updateDisplay(powerOn ? audioName : '')
    document.getElementById(keyName).volume = powerOn ? volume / 100 : 0
    // document.getElementById(keyName).parentElement.style.backgroundColor= powerOn ? '#ffa500' : '#808080'
    // setTimeout(()=>document.getElementById(keyName).parentElement.style.backgroundColor='#808080', 100)
    document.getElementById(audioName).style.backgroundColor= powerOn ? '#ffa500' : '#808080'
    setTimeout(()=>document.getElementById(audioName).style.backgroundColor='#808080', 100)
    document.getElementById(keyName).play()
    // document.getElementById(audioName).children[0].play()
  }

  return (
    <button id={audioName} className='drum-pad' type='button' onClick={handleClick}>
      {keyName}
      <audio id={keyName} className='clip' src={audio} type='audio/mpeg'></audio>
    </button>
  )
}

export default DrumPad