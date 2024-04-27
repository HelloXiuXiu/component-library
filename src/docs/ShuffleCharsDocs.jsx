import DocsWrap from './common/DocsWrap.jsx'

function ShuffleCharsDocs() {
  return (
    <DocsWrap>
      <li className="docs-row">
        <div className="docs-cell"><code>ANIM_TRIGGER</code></div>
        <div className="docs-cell italic"><code>''</code></div>
        <div className="docs-cell italic"><code>string</code></div>
        <div className="docs-cell">Class of id of section in the viewport that triggers animation, should contain all selectors. Should contain all elem selectors</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>ELEMS_SELECTOR</code></div>
        <div className="docs-cell italic"><code>''</code></div>
        <div className="docs-cell italic"><code>string</code></div>
        <div className="docs-cell">Should contain only text roots (!) should be children of <code>ANIM_TRIGGER</code>. all elements that contains anything except text nodes, <code>&lt;br&gt;</code>, <code>&lt;br /&gt;</code>, <code>&lt;br/&gt;</code>, <code>&amp;nbsp;</code> will be skiped</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>OFFSET</code></div>
        <div className="docs-cell italic"><code>200px</code></div>
        <div className="docs-cell italic"><code>string</code></div>
        <div className="docs-cell">trigger distance (top of <code>ANIM_TRIGGER</code> and bottom of the screen), px or % (% of the screen), positive integer</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>ANIM_DELEY</code></div>
        <div className="docs-cell italic"><code>70</code></div>
        <div className="docs-cell italic"><code>number</code></div>
        <div className="docs-cell">Animation start delay between for each element (ms)</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>ANIM_SPEED</code></div>
        <div className="docs-cell italic"><code>70</code></div>
        <div className="docs-cell italic"><code>number</code></div>
        <div className="docs-cell">Animation delay between each character (ms)</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>GROWING_MODE</code></div>
        <div className="docs-cell italic"><code>true</code></div>
        <div className="docs-cell italic"><code>boolean</code></div>
        <div className="docs-cell">Mode that makes each word growing from one char to the word length</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>ANIM_RUN_TIME</code></div>
        <div className="docs-cell italic"><code>1500</code></div>
        <div className="docs-cell italic"><code>number</code></div>
        <div className="docs-cell">Interval between each element. Works if <code>GROWING_MODE</code> set to <code>false</code> (ms)</div>
        <div className="docs-cell italic"><code>yes</code></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>RUN_ONCE</code></div>
        <div className="docs-cell italic"><code>false</code></div>
        <div className="docs-cell italic"><code>boolean</code></div>
        <div className="docs-cell">Is animation run on each intersection (won't run if the prev run is not fulfiled)</div>
        <div className="docs-cell italic"></div>
      </li>
      <li className="docs-row">
        <div className="docs-cell"><code>OPACITY_TRANSITION</code></div>
        <div className="docs-cell italic"><code>600</code></div>
        <div className="docs-cell italic"><code>number</code></div>
        <div className="docs-cell">Transition on unload. If no value - false. If false - no unload.</div>
        <div className="docs-cell italic"><code>yes</code></div>
      </li>
    </DocsWrap>
  )
}

export default ShuffleCharsDocs
