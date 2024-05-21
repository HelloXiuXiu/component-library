import DocsWrap from './common/DocsWrap.jsx'

function FlyingHintDocks() {
  return (
    <DocsWrap>
      <li className="docs-row">
        <div className="docs-cell"><code>COLOR</code></div>
        <div className="docs-cell italic">–</div>
        <div className="docs-cell italic"><code>string</code></div>
        <div className="docs-cell">Text color</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>BACKGROUND_COLOR</code></div>
        <div className="docs-cell italic">–</div>
        <div className="docs-cell italic"><code>string</code></div>
        <div className="docs-cell">Background-color</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>HINT_CLASS</code></div>
        <div className="docs-cell italic">–</div>
        <div className="docs-cell italic"><code>string</code></div>
        <div className="docs-cell">Class that will be applied to an element. Used for setting some additional styles.</div>
        <div className="docs-cell italic">yes</div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>EASE</code></div>
        <div className="docs-cell italic">0.08</div>
        <div className="docs-cell italic"><code>number</code></div>
        <div className="docs-cell">
          Ease sets the delay with which the flying hint follows the cursor, affecting the smothness of the animation. 
          Number from 0 to 1.</div>
        <div className="docs-cell italic"></div>
      </li>
    </DocsWrap>
  )
}

export default FlyingHintDocks
