/*

TODO
1. deal with children
2. deal with <br> /n
3. Change function names

*/
import isAdmin from '../cargo/admin-mode-check.js'
import isHomepage from '../cargo/target-page-check.js'

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

function runCodeLoad() {
  const animContentPage = document.querySelector(ANIM_TRIGGER)
  const elemList = animContentPage.querySelectorAll(ELEMS_SELECTOR)

  elemList.forEach(el => el.originaltext = el.innerText)

  // ******** cargo code ******** //
  if (isAdmin()) return
  if (isHomepage()) return
  // ******** cargo code ******** //

  let isRunning = false

  // intersection observer
  const observeHomePage = new window.IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.addEventListener('scroll', AnimateHomePage, { once: true })
      }
    })
  }, { rootMargin: `0px 0px -${OFFSET}` })

  observeHomePage.observe(animContentPage)

  // rows animation
  function AnimateHomePage() {
    if (isRunning) return
    isRunning = true

    async function runAnim() {
      if (OPACITY_TRANSITION) {
        elemList.forEach(elem => {
          elem.style.opacity = '0'
          let t = OPACITY_TRANSITION / 1000
          elem.style.transition = 'opacity ' + t + 's ease'
        })
      }

      for (let i = 0; i < elemList.length; i++) {
        await addAnim(elemList[i])
        if (!RUN_ONCE && i === elemList.length - 1) {
          const lastRunTime = GROWING_MODE ? elemList[elemList.length - 1].innerText.lenght * ANIM_SPEED : ANIM_RUN_TIME
          setTimeout(() => isRunning = false, lastRunTime)
        }
      }
    }
    runAnim()

    async function addAnim(elem) {
      runCodeBlink(elem)
      await wait(ANIM_DELEY)
    }

    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function runCodeBlink(elem) {
      if (OPACITY_TRANSITION) {
        elem.style.opacity = '1'
        let t = (elem.originaltext.length * ANIM_SPEED) / 1000
        elem.style.transition = 'opacity ' + t + 's ease'
      }

      if (GROWING_MODE) {
        // growing word version
        for (let i = 1; i < elem.originaltext.length; i++) {
          elem.innerText = scrambleText(elem.originaltext, i)
          await wait(ANIM_SPEED)
        }
      } else {
        // interval version
        const interval = setInterval(() => elem.innerText = scrambleText(elem.originaltext, elem.originaltext.length), ANIM_SPEED)
        await wait(ANIM_RUN_TIME)
        clearInterval(interval)
      }
      
      elem.innerText = elem.originaltext
      if (OPACITY_TRANSITION) elem.style.transition = ''
    }

    function scrambleText(text, count) {
      const chars = '*?><[]&@#)(0%$-_:/1?!'.split('')
      return text.split('').map(x => randomInt(3) > 1 ? randomFromArray(chars) : x).slice(0, count).join('')
    }

    function randomInt(max) {
      return Math.floor(Math.random() * max)
    }

    function randomFromArray(array) {
      return array[randomInt(array.length)]
    }
  }
}

addEventListener('load', runCodeLoad)
