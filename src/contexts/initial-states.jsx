import { createContext } from 'react'

const AnimContext = createContext()

let draggable = {
  'ELEMS_SELECTOR': '.draggable',
  'Z-INDEX': false
}

let shuffleChars = {
  'ANIM_TRIGGER': '.shuffle-chars-trig',
  'ELEMS_SELECTOR': '.shuffle-chars-elem',
  'OFFSET': '200px',
  'ANIM_DELEY': 70,
  'ANIM_SPEED': 70,
  'GROWING_MODE': true,
  'ANIM_RUN_TIME': 1500,
  'RUN_ONCE': false,
  'OPACITY_TRANSITION': 600
}

function AnimProvider({ children }) {
  let animGlobal = {
    draggable: draggable,
    shuffleChars: shuffleChars
  }

  return (
    <AnimContext.Provider value={animGlobal}>
      {children}
    </AnimContext.Provider>
  )
}

export { AnimContext, AnimProvider }