import React,  {useState, useContext} from 'react'
import {heaterKit, smoothPiano} from './data'

const DrumContext = React.createContext()
const DrumProvider = ({children}) => {
  const [powerOn, setPowerOn] = useState(true)
  const [bank, setBank] = useState({kit:heaterKit, id:'heater'})
  const [display, setDisplay] = useState('Heater Kit')
  const [volume, setVolume] = useState(50)

  const togglePower = () => {
    if (powerOn) {
      setPowerOn(false)
      setDisplay('')
    } else {
      setPowerOn(true)
      setDisplay('Heater Kit')
    }
  }

  const toggleBank = () => {
    if (bank.kit === heaterKit) { //
      setBank({kit: smoothPiano, id: 'piano'})
      setDisplay('Smooth Piano Kit')
    } else {
      setBank({kit: heaterKit, id: 'heater'})
      setDisplay('Heater Kit')
    }
  }

  const updateDisplay = (name) => {
    setDisplay(name)
  }

  const updateVolume = volume => {
    setVolume(volume)
  }
  
  return (
    <DrumContext.Provider value={{powerOn, bank, display, volume, 
      togglePower, toggleBank, updateDisplay, updateVolume}} >
      {children}
    </DrumContext.Provider>
  )
}

export const useDrumContext = () => {
  return useContext(DrumContext)
}

export {DrumContext, DrumProvider}