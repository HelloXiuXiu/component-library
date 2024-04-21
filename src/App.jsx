import { useState } from 'react'
import './App.css'

import Draggable from './components/Draggable.jsx'
import ShuffleChars from './components/ShuffleChars.jsx'

function App() {
  // const [theme, setTheme] = useState('dark') // dark, light
  // const [style, setStyle] = useState('s') // s, m, l

  return (
    <div className="page">
      <h2 className="animation-title">Draggable</h2>
      <Draggable />
      <h2 className="animation-title">Shuffle chars</h2>
      <ShuffleChars />
    </div>
  )
}

export default App
