/*

TODO
1. check if imports can be done comditionally to remove cargo scripts
2. make controls
3. filter elems without children on first iteration

*/

import isAdmin from '../cargo/admin-mode-check.js'
import isHomepage from '../cargo/target-page-check.js'

// docks
// 1. all elements that contains anything except text nodes, <br>, <br />, <br/>, &nbsp; will be skiped

// constrols
let ANIM_DELEY = 70
let ANIM_SPEED = 70
let GROWING_MODE = true
let ANIM_RUN_TIME = 1500 // interval run time (works if GROWING_MODE false)
let RUN_ONCE = false
let ANIM_TRIGGER = '.codeload-trig' // 200px section in the viewport that triggers animation, should contain all selectors
let ELEMS_SELECTOR = '.codeload-elem' // (!) should contain only text roots (!) should be children of ANIM_TRIGGER
let OPACITY_TRANSITION = 600 // transition - falsy by default
let OFFSET = '200px' // trigger distance (top of ANIM_TRIGGER and bottom of the screen), px or % (% of the screen), positive integer

function runShuffleChars() {
  // cargo scripts
  // if (isAdmin()) return
  // if (isHomepage()) return

  const animTrigger = document.querySelector(ANIM_TRIGGER)
  const elemList = animTrigger.querySelectorAll(ELEMS_SELECTOR)

  Array.from(elemList).filter(el => hasNoChildren(el)).forEach(el => el.originaltext = el.innerText)

  function hasNoChildren(elem) {
    let regex1 = /<br\s*\/?>|&nbsp;|\s*/g
    let regex2 = /\n|&nbsp;|\s*/g
    return elem.innerHTML.replaceAll(regex1, '').toLowerCase() === elem.innerText.replaceAll(regex2, '').toLowerCase()
  }

  let isRunning = false

  // intersection observer
  const observeTrigger = new window.IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.addEventListener('scroll', animate, { once: true })
      }
    })
  }, { rootMargin: `0px 0px -${OFFSET}` })

  observeTrigger.observe(animTrigger)

  // animation
  function animate() {
    if (isRunning) return
    isRunning = true

    async function startRun() {
      if (OPACITY_TRANSITION) {
        for (let i = 0; i < elemList.length; i++) {
          elemList[i].style.opacity = '0'
          let t = OPACITY_TRANSITION / 1000
          elemList[i].style.transition = 'opacity ' + t + 's ease'
        }
      }
      for (let i = 0; i < elemList.length; i++) {
        await addAnim(elemList[i])

        if (!RUN_ONCE && i === elemList.length - 1) {
          const lastRunTime = GROWING_MODE ? elemList[elemList.length - 1].innerText.lenght * ANIM_SPEED : ANIM_RUN_TIME
          setTimeout(() => isRunning = false, lastRunTime)
        }
      }
    }
    startRun()

    async function addAnim(elem) {
      mainRun(elem)
      await wait(ANIM_DELEY)
    }

    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function mainRun(elem) {
      if (OPACITY_TRANSITION) {
        elem.style.opacity = '1'
        let t = (elem.originaltext.length * ANIM_SPEED) / 1000
        elem.style.transition = 'opacity ' + t + 's ease'
      }
      if (GROWING_MODE) {
        // growing word version
        for (let i = 1; i < elem.originaltext.length; i++) {
          elem.innerText = shuffleChars(elem.originaltext, i)
          await wait(ANIM_SPEED)
        }
      } else {
        // interval version
        const interval = setInterval(() => elem.innerText = shuffleChars(elem.originaltext, elem.originaltext.length), ANIM_SPEED)
        await wait(ANIM_RUN_TIME)
        clearInterval(interval)
      }

      elem.innerText = elem.originaltext
      if (OPACITY_TRANSITION) elem.style.transition = ''
    }

    function shuffleChars(text, count) {
      const chars = '*?><[]&@#)(0%$-_:/1?!'.split('')
      return text.split('').map(x => randomInt(3) > 1 ? randomArray(chars) : x).slice(0, count).join('')
    }

    function randomInt(max) {
      return Math.floor(Math.random() * max)
    }

    function randomArray(array) {
      return array[randomInt(array.length)]
    }
  }
}

addEventListener('load', runShuffleChars)
