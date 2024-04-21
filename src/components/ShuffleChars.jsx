import { useState, useEffect } from 'react'
import './ShuffleChars.css'

// the script is connected in the index.html file
// because useEffect runs it twice! 

function ShuffleChars() {
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
        <li className="codeload-elem">Hell<span>o</span></li>
        <li className="codeload-elem">Sed ut perspiciati<span>s</span></li>
        <li className="codeload-elem">Worl<span>d</span></li>
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
        <li className="codeload-elem">Sed ut per<span>s</span>piciatis</li>
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
  </div>
  )
}

export default ShuffleChars
