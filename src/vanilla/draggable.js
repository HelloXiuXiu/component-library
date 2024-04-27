/*

TODO
1. test mobile
2. style

*/

// controls
let ELEMS_SELECTOR = '.draggable'

function makeDraggable(elem) {
  let offsetX = 0, offsetY = 0, startX = 0, startY = 0
  let isMobile = false

  elem.style.willChange = 'transform'
  elem.style.userSelect = 'none'

  elem.addEventListener('mousedown', startDrag)
  elem.addEventListener('touchstart', startDrag)

  function startDrag(e) {
    if (e.constructor.name === 'MouseEvent') {
      isMobile = false
      e.preventDefault()
      startX = e.clientX - offsetX
      startY = e.clientY - offsetY
      document.addEventListener('mousemove', drag)
      document.addEventListener('mouseup', stopDrag)
      document.addEventListener('contextmenu', stopDrag)
    } else {
      isMobile = true
      startX = e.touches[0].clientX - offsetX
      startY = e.touches[0].clientY - offsetY
      window.addEventListener('touchmove', drag, { passive: false })
      window.addEventListener('touchend', stopDrag)
    }
  }

  function drag(e) {
    e.preventDefault()
    e.stopImmediatePropagation()
    document.body.style.overflow = 'hidden'
    const computedX = isMobile ? e.touches[0].clientX : e.clientX
    const computedY = isMobile ? e.touches[0].clientY : e.clientY

    const x = computedX- startX
    const y = computedY - startY
    offsetX = computedX - startX
    offsetY = computedY - startY
    elem.style.transform = `translate(${x}px, ${y}px)`
  }

  function stopDrag() {
    document.body.style.overflow = ''
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    window.removeEventListener('touchmove', drag, { passive: false })
    window.removeEventListener('touchend', stopDrag)
  }
}

addEventListener('load', () => document.querySelectorAll(ELEMS_SELECTOR).forEach(el => makeDraggable(el)))
