import React from "react";
import { useDrumContext } from "./context";
import DrumPad  from "./DrumPad";

const keyNames = [ 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

const DrumPads = () => {
  const {bank} = useDrumContext()
  return (
    <section className='drum-pads'>     
       {
        bank.kit.map((item, index)=>{
          return <DrumPad key={keyNames[index]} audio={item.audio} audioName={item.name} keyName={keyNames[index]}/>
        })
      }
    </section>
  )
}

export default DrumPads
