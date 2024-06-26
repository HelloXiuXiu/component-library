import { createContext } from 'react'
import './App.css'

import Draggable from './components/Draggable.jsx'
import ShuffleChars from './components/ShuffleChars.jsx'
import FlyingHint from './components/FlyingHint.jsx'

import { AnimProvider } from './contexts/initial-states.jsx'

function App() {
  return (
      <div className="page">
        <AnimProvider>
          <Draggable />
          <ShuffleChars />
          <FlyingHint />
        </AnimProvider>
      </div>
  )
}

export default App
