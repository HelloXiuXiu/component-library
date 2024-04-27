import DocsWrap from './common/DocsWrap.jsx'

function DraggableDocs() {
  return (
    <DocsWrap>
      <li className="docs-row">
        <div className="docs-cell"><code>ELEMS_SELECTOR</code></div>
        <div className="docs-cell italic">–</div>
        <div className="docs-cell italic"><code>string</code></div>
        <div className="docs-cell">
          Class of id of an element that will be draggable. The selected element should have an absolute position.
          The element should not have transform styles. If transform is needed, create a new wrapper inside of "draggable"
          element and apply this styles to this child. Example: <code>'.foo'</code>, <code>'#foo'</code>
          </div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row wip">
        <div className="docs-cell"><code>Z-INDEX</code></div>
        <div className="docs-cell italic">false</div>
        <div className="docs-cell italic"><code>boolean</code></div>
        <div className="docs-cell">
          Mode where selected elem goes up (above other draggable elems)
          </div>
        <div className="docs-cell italic"></div>
      </li>
    </DocsWrap>
  )
}

export default DraggableDocs
