import { useState, useEffect, useContext } from 'react'
import ControlWrap from './common/ControlWrap.jsx'

import { AnimContext } from '../contexts/initial-states.jsx'

function ShuffleCharsControls() {
  const initialState = useContext(AnimContext).shuffleChars

  const [offset, setOffset] = useState(initialState.OFFSET)
  const [animDelay, setAnimDelay] = useState(initialState.ANIM_DELEY)
  const [growingMode, setGrowingMode] = useState(initialState.GROWING_MODE)

  useEffect(() => {
    
  },[offset, animDelay, growingMode])

  function handleInput(e) {
    const id = e.target.id.replace(/-./g, char => char.slice(1).toUpperCase())
    switch(id) {
      case 'offset':
        setOffset(e.target.value)
        break
      case 'animDelay':
        setAnimDelay(e.target.value)
        break
      case 'growingMode':
        setGrowingMode(!growingMode)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(offset)
  }

  return (
    <ControlWrap>
      <form onSubmit={handleSubmit}>
        <label htmlFor="offset">OFFSET</label>
        <input id="offset" type="text" value={offset} onChange={handleInput} onSubmit={handleSubmit}/>
        <label htmlFor="growing-mode">GROWING_MODE</label>
        <input id="growing-mode" type="checkbox" checked={growingMode} onChange={handleInput} onSubmit={handleSubmit}/>
        <input type="submit" value="Submit" onSubmit={handleSubmit}/>
      </form>
    </ControlWrap>
  )
}

export default ShuffleCharsControls
