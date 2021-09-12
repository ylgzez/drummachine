import React, {useEffect} from "react";
import DrumPads from "./DrumPads";
import DrumCtrls from "./DrumCtrls"

function App() {
  useEffect(()=>{
    document.addEventListener('keydown', (e)=>{
      console.log(e.key)
      if (e.key.match(/^q$|^w$|^e$|^a$|^s$|^d$|^z$|^x$|^c$|^Q$|^W$|^E$|^A$|^S$$|^D$|^Z$|^X$|^C$/)) {
        try {
          const drumpad = document.getElementById(e.key.toUpperCase()).parentElement
          drumpad.click()
          // drumpad.className += ' active'
          drumpad.classList.add('active')
        } catch(e) {
          console.log('err: ', e.message)
        }
      }
    })
    document.addEventListener('keyup', (e)=>{
      if (e.key.match(/^q$|^w$|^e$|^a$|^s$|^d$|^z$|^x$|^c$|^Q$|^W$|^E$|^A$|^S$$|^D$|^Z$|^X$|^C$/)) {
        try {
          const drumpad = document.getElementById(e.key.toUpperCase()).parentElement
          //drumpad.className = drumpad.className.replace(' active', '')
          drumpad.classList.remove('active')
        } catch(e) {
          console.log('err: ', e.message)
        }
      }
    })
  })

  return (
    <main id='drum-machine'>
      <article id='display'>
        <DrumPads />
        <DrumCtrls />
      </article> 
    </main>
  );
}

export default App;
