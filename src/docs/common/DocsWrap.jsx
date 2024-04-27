import './DocsWrap.css'

function DocsWrap({ children }) {
  return (
    <ul className="docs-wrap">
      <li className="docs-header">
        <div className="docs-cell">Property</div>
        <div className="docs-cell">Default</div>
        <div className="docs-cell">Type</div>
        <div className="docs-cell">Description</div>
        <div className="docs-cell">Optional</div>
      </li>
      { children }
    </ul>
  )
}

export default DocsWrap
