import React from "react"
import Switch from "./Switch"
import { useDrumContext } from "./context"

const DrumCtrls = () => {
  const {powerOn, bank, volume, updateVolume, display, togglePower, toggleBank} = useDrumContext()
  const heaterBeingPlayed = bank.id === 'heater' ? true : false

  return (
    <section className='drum-ctrls'>
      <div>
        <p>Power</p>
        <div className='switch' onClick={togglePower}>
          <Switch state={powerOn} />
        </div>
      </div>
      <div className='title'>{display}</div>
      <input type='range' id='vol' defaultValue={volume} min={0} max={100} onChange={(e)=>{
        console.log(e.target.value)
        updateVolume(e.target.value)
      }}/>
      <div>
        <p>Bank</p>
        <div className='switch' onClick={toggleBank}>
          <Switch state={heaterBeingPlayed} />
        </div>
      </div>
    </section>
  )
}

export default DrumCtrls