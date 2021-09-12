import React from 'react'

const Switch = ({state}) => {
  return (
    <>
      <div className={`${state? 'size black' : 'size blue'}`}></div>
      <div className={`${state? 'size blue' : 'size black'}`}></div>
    </>
  )
}

export default Switch
