import { useState } from 'react'
import './App.css'

import Draggable from './components/Draggable.jsx'

function App() {
  const [theme, setTheme] = useState('dark') // dark, light
  const [style, setStyle] = useState('s') // s, m, l

  return (
    <div>
      <Draggable>Hey</Draggable>
    </div>
  )
}

export default App
