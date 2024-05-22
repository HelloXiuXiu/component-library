// 1. add [data-hint] attribute to all triggers; value is the hint text
// 2. if trig elements are close to right and bottom edges of the screen
//    add [data-edge="true"] attribute
// 3. to make a part of a hint text bolder, wrap it into /b.../b

// TO-D0
// 1. controls
// 2. test with other no-trigger children

// constrols
let COLOR = '#000000'
let BACKGROUND_COLOR = '#F9614D'
let HINT_CLASS = '' // class to set some additional styles
let EASE = 0.08

function runFlyingHint() {
  const hintTriggers = document.querySelectorAll('[data-hint]')
  if (!hintTriggers) return

  const hint = document.createElement('DIV')
  document.body.appendChild(hint)

  hint.style.position = 'absolute'
  hint.style.top = '0'
  hint.style.left= '0'
  hint.style.opacity = '0'
  hint.style.zIndex = '9999'
  hint.style.borderRadius = '40px'
  hint.style.padding = '4px 16px'
  hint.style.transition = 'opacity 0.2s ease'
  hint.style.color = COLOR
  hint.style.backgroundColor = BACKGROUND_COLOR

  if (HINT_CLASS) hint.classList.add(HINT_CLASS)

  let posX = 0
  let posY = 0
  let mouseX = 0
  let mouseY = 0
  let indX = 0
  let indY = 0

  const shiftX = 10
  const shiftY = 45
  const ease = 0.08

  let isMobile = !window.matchMedia('(hover: hover)').matches
  let mobileReset = false

  const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

  function showHint() {
    hintTriggers.forEach(trigger => {
      trigger.addEventListener('mouseenter', (e) => {
        e.stopPropagation()
        hint.style.opacity = '1'
        updateText(trigger.dataset.hint)
        if (trigger.dataset.edge) {
          handleEdge()
        } else {
          indX = 0
          indY = 0
        }
      })
      trigger.addEventListener('mouseout', (e) => {
        e.stopPropagation()
        if (!e.relatedTarget.dataset?.hint) {
          hint.style.opacity = '0'
        } else {
          updateText(e.relatedTarget.dataset?.hint)
        }
      })
    })
  }

  function moveHint() {
    mobileReset = false
    document.addEventListener('mousemove', setCoords)
    update()
  }

  function setCoords(e) {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  function update() {
    if (!isMobile) {
      easeTo()
      hint.style.transform = `translate3d(${posX}px, ${posY}px, 0)`
      window.requestAnimationFrame(update)
    }
  }

  function updateText(text) {
    const regex = /\/b.*?\/b/
    if (text.match(regex)) {
      const updatedText = text.match(regex)[0].slice(2, -2)
      hint.innerHTML = text.replace(regex, `<span style="font-weight: bolder;">${updatedText}</span>`)
    } else {
      hint.innerText = text
    }
  }

  function handleEdge() {
    indX = (mouseX > w - hint.offsetWidth + shiftX) ? hint.offsetWidth - shiftX : 0
    indY = (mouseY > h - hint.offsetHeight - shiftY) ? hint.offsetHeight * 2 + shiftY : 0
  }

  function easeTo() {
    const hintBounds = hint.getBoundingClientRect()
    posX += (mouseX - (hintBounds.left + shiftX + indX)) * EASE
    posY += (mouseY - (hintBounds.top - shiftY + indY)) * EASE
  }

  window.addEventListener('resize', () => {
    isMobile = !window.matchMedia('(hover: hover)').matches
    if (mobileReset && !isMobile) moveHint()
    if (isMobile) {
      window.cancelAnimationFrame(update)
      mobileReset = true
    }
  })

  moveHint()
  showHint()
}

addEventListener('load', runFlyingHint)
