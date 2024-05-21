import ComponentWrap from './common/ComponentWrap.jsx'
import ComponentTitle from './common/ComponentTitle.jsx'
import './FlyingHint.css'

// docs
//import FlyingHintDocs from '../docs/FlyingHintDocs.jsx'

function FlyingHint() {
  return (
    <ComponentWrap>
      <ComponentTitle>Flying Hint</ComponentTitle>
      <div className="flying-hint-wrap" data-hint="Hello /bWorld/b">
        <div className="flying-trig trig-one" data-hint="Hello">Hover me</div>
        <div className="flying-trig trig-two" data-hint="World">Hover me</div>
      </div>
    </ComponentWrap>
  )
}

export default FlyingHint
