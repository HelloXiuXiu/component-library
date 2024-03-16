import { useState } from 'react'
import './Draggable.css'

function Draggable( {children} ) {
  const [count, setCount] = useState(0)

  return (
    <div className="draggable">
      {children}
    </div>
  )
}

export default Draggable
