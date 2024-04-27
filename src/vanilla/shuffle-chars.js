/*

TODO
1. check if imports can be done conditionally to remove cargo scripts
2. make controls
3. several anim triggers

*/

import isAdmin from '../cargo/admin-mode-check.js'
import isHomepage from '../cargo/target-page-check.js'

// constrols
let ANIM_TRIGGER = '.shuffle-chars-trig'
let ELEMS_SELECTOR = '.shuffle-chars-elem'
let OFFSET = '200px'
let ANIM_DELEY = 70
let ANIM_SPEED = 70
let GROWING_MODE = true
let ANIM_RUN_TIME = 1500
let RUN_ONCE = false
let OPACITY_TRANSITION = 600

function runShuffleChars() {
  // place for cargo scripts
  const animTrigger = document.querySelector(ANIM_TRIGGER)
  const elemList = animTrigger.querySelectorAll(ELEMS_SELECTOR)

  const elemArray = Array.from(elemList, (el) => hasNoChildren(el) ? saveOriginalText(el) : false).filter(Boolean)

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
        for (let i = 0; i < elemArray.length; i++) {
          elemArray[i].style.opacity = '0'
          const t = OPACITY_TRANSITION / 1000
          elemArray[i].style.transition = 'opacity ' + t + 's ease'
        }
      }

      for (let i = 0; i < elemArray.length; i++) {
        await addAnim(elemArray[i])
      }

      if (!RUN_ONCE) {
        const lastRunTime = GROWING_MODE ? elemArray[elemArray.length - 1].originaltext.lenght * ANIM_SPEED : ANIM_RUN_TIME
        setTimeout(() => isRunning = false, lastRunTime)
      }
    }
    startRun()
  }
}

async function addAnim(elem) {
  animationBody(elem)
  await wait(ANIM_DELEY)
}

async function animationBody(elem) {
  if (OPACITY_TRANSITION) {
    elem.style.opacity = '1'
    const t = (elem.originaltext.length * ANIM_SPEED) / 1000
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

function saveOriginalText(elem) {
  elem.originaltext = elem.innerText
  return elem
}

function hasNoChildren(elem) {
  const regex1 = /<br\s*\/?>|&nbsp;|\s*/g
  const regex2 = /\n|&nbsp;|\s*/g
  return elem.innerHTML.replaceAll(regex1, '').toLowerCase() === elem.innerText.replaceAll(regex2, '').toLowerCase()
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
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

addEventListener('load', runShuffleChars)
