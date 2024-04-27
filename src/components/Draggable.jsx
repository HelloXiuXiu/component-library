import './Draggable.css'

// docs
import DraggableDocs from '../docs/DraggableDocs.jsx'

function Draggable() {
  return (
    <div className="draggable">
      <div className="draggable-wrap">
        <div className="draggable draggable-body-one">
         <div className="draggable-transform-one">Hello, I'm draggable.</div>
        </div>
        <div className="draggable draggable-body-two">
         <div className="draggable-transform-two">Hello, me to.</div>
        </div>
      </div>
      <DraggableDocs />
    </div>
  )
}

export default Draggable
