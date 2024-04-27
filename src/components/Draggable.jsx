import ComponentWrap from './common/ComponentWrap.jsx'
import ComponentTitle from './common/ComponentTitle.jsx'
import './Draggable.css'

// docs
import DraggableDocs from '../docs/DraggableDocs.jsx'

function Draggable() {
  return (
    <ComponentWrap>
      <ComponentTitle>Draggable</ComponentTitle>
      <div className="draggable-wrap">
        <div className="draggable draggable-body-one">
         <div className="draggable-transform-one">Hello, I'm draggable.</div>
        </div>
        <div className="draggable draggable-body-two">
         <div className="draggable-transform-two">Hello, me to.</div>
        </div>
      </div>
      <DraggableDocs />
    </ComponentWrap>
  )
}

export default Draggable
