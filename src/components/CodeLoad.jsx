import { useState, useEffect } from 'react'
import './CodeLoad.css'

import { runCodeLoad } from '../vanilla/code-load.js'

function CodeLoad() {
  useEffect(() => {
    runCodeLoad()
  }, [])

  const css = `
    .faded {
      opacity: 0;
      transition: opacity 0.6s ease;
    }
  `
 
  return (
  <div className="code-load"> 
    <div className="codeload-scroll"></div>
    <div className="codeload-trig">
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
      <ul className="codeload-row">
        <li className="codeload-elem">Hello</li>
        <li className="codeload-elem">Sed ut perspiciatis</li>
        <li className="codeload-elem">World</li>
      </ul>
      <hr />
    </div>
    <div className="codeload-scroll"></div>
    <style>{css}</style>
  </div>
  )
}

export default CodeLoad
