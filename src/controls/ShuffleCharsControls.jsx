import { useState } from 'react'

let initialState = {
  OFFSET: '200px',
  ANIM_DELEY: 70,
  GROWING_MODE: true
}

function ShuffleCharsControls() {
  const [offset, setOffset] = useState(initialState.OFFSET)
  const [animDelay, setAnimDelay] = useState(initialState.ANIM_DELEY)
  const [growingMode, setGrowingMode] = useState(initialState.GROWING_MODE)

  function handleOffsetInput(e) {
    let id = e.target.id.replace(/-./g, char => char.slice(1).toUpperCase())
    console.log(id)
    setOffset(e.target.value)
  }

  function handleOffsetSubmit(e) {
    e.preventDefault()
    initialState.OFFSET = offset
    console.log(initialState)
    setOffset('')
  }

  return (
    <div>
      <form>
        <label htmlFor="offset">OFFSET</label>
        <input id="offset" type="text" value={offset} onChange={handleOffsetInput} onSubmit={handleOffsetSubmit}/>
        <label htmlFor="growing-mode">GROWING_MODE</label>
        <input id="growing-mode" type="checkbox" value={growingMode} onChange={handleOffsetInput} onSubmit={handleOffsetSubmit}/>
      </form>
    </div>
  )
}

export default ShuffleCharsControls
