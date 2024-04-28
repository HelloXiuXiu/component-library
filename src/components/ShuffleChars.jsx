// import { useEffect } from 'react'
import ComponentWrap from './common/ComponentWrap.jsx'
import ComponentTitle from './common/ComponentTitle.jsx'
import './ShuffleChars.css'

// docs & controls
import ShuffleCharsDocs from '../docs/ShuffleCharsDocs.jsx'
import ShuffleCharsControls from '../controls/ShuffleCharsControls.jsx'

// TODO:
// 1. getInitialState
// 2. setInitialState

let initialState = {
  OFFSET: '200px',
  ANIM_DELEY: 70,
  GROWING_MODE: true
}

function ShuffleChars() {
  // useEffect(() => {
  // const callback = () => console.log('kek')
  // document.addEventListener('scroll', callback, {once: true})
  //  return () => document.removeEventListener('scroll', callback, {once: true})
  // }, [])

  return (
    <ComponentWrap> 
      <ComponentTitle>Shuffle Chars</ComponentTitle>
      <ShuffleCharsControls initialState={initialState}/>
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
    </ComponentWrap>
  )
}

export default ShuffleChars
