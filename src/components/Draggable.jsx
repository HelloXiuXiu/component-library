import './Draggable.css'

function Draggable() {
  return (
    <div className="draggable-wrap">
      <div className="draggable draggable-body-one">
       <div className="draggable-transform-one">Hello, I'm draggable.</div>
      </div>
      <div className="draggable draggable-body-two">
       <div className="draggable-transform-two">Hello, me to.</div>
      </div>
    </div>
  )
}

export default Draggable
