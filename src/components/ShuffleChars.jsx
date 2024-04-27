import { useEffect } from 'react'
import './ShuffleChars.css'

import ShuffleCharsDocs from '../docs/ShuffleCharsDocs.jsx'

function ShuffleChars() {
  // useEffect(() => {
  // const callback = () => console.log('kek')
  // document.addEventListener('scroll', callback, {once: true})
  //  return () => document.removeEventListener('scroll', callback, {once: true})
  // }, [])

  return (
    <div className="shuffle-chars"> 
      <div className="shuffle-chars-trig">
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">S<span>e</span>d ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
        <ul className="shuffle-chars-row">
          <li className="shuffle-chars-elem">Hello</li>
          <li className="shuffle-chars-elem">Sed ut perspiciatis</li>
          <li className="shuffle-chars-elem">World</li>
        </ul>
        <hr />
      </div>
      <ShuffleCharsDocs />
      <div className="shuffle-chars-scroll"></div>
    </div>
  )
}

export default ShuffleChars
