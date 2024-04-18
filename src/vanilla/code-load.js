/*

TODO
0. create cargo finctions directory
!!! 3. check if content loaded and then run! => useEffect (but runs twice ? )

*/

export function runCodeLoad() {
  // constrols
  const ANIM_DELEY = 70
  const ANIM_SPEED = 70
  const GROWING_MODE = true
  const ANIM_RUN_TIME = 1500 // interval run time (works if GROWING_MODE false)
  const RUN_ONCE = false
  const ANIM_TRIGGER = '.codeload-trig' // 30% section in the viewport that triggers animation, should contain all selectors
  const ELEMS_SELECTOR = '.codeload-elem' // (!) should contain only text roots (!) should be children of ANIM_TRIGGER
  const OPACITY_TRANSITION =  600 // transition - falsy by default

  const animContentPage = document.querySelector(ANIM_TRIGGER)
  const elemList = [...animContentPage.querySelectorAll(ELEMS_SELECTOR)]

  elemList.forEach(el => {
    el.originaltext = el.innerText
  })

  // ******** cargo code ******** //
  // admin mode check
  const urlCheck2 = window.location?.pathname?.startsWith('/admin')
  const urlCheck3 = window.location?.pathname?.startsWith('/edit')
  if (document.body.classList.contains('editing') || urlCheck2 || urlCheck3) return

  // target page check (homepage)
  const targetPage = window.location?.pathname
  if (targetPage.length > 1) return
  // ******** cargo code ******** //

  let isRunning = false

  // intersection observer
  const observeHomePage = new window.IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(isRunning)
        document.addEventListener('scroll', AnimateHomePage, { once: true })
      } 
    })
  }, { rootMargin: '0px 0px -200px' })

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
      const originalText = elem.originaltext
      if (OPACITY_TRANSITION) {
        elem.style.opacity = '1'
        let t = (originalText.length * ANIM_SPEED) / 1000
        elem.style.transition = 'opacity ' + t + 's ease'
      }

      if (GROWING_MODE) {
        // growing word version
        for (let i = 1; i < originalText.length; i++) {
          elem.innerText = scrambleText(originalText, i)
          await wait(ANIM_SPEED)
        }
      } else {
        // interval version
        const interval = setInterval(() => elem.innerText = scrambleText(originalText, originalText.length), ANIM_SPEED)
        await wait(ANIM_RUN_TIME)
        clearInterval(interval)
      }
      
      elem.innerText = originalText
      if (OPACITY_TRANSITION) elem.style.transition = ''
    }

    function scrambleText(text, count) {
      console.log(count)
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
