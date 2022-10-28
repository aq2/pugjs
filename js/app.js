/// init
  let firstPage = 'treatments' //?
  
  const hero = $('#hero')
  const header = $('header')  
  const headline = $('h1')  
  const nav = $('nav')
  const blackness = $('#blackness')
  
  let oldSection = $('.' + firstPage)
  let oldTab = $('#' + firstPage)
  $show(oldTab)
  $show(oldSection)

//
//
/// hero
  
  let delay = 2
  let range = 'XXX'
  let timeout = false
  window.onscroll = function (e) {
    // todo only bother calling these if scrolltop not exceeded?
    clearTimeout(timeout)
    timeout = setTimeout(scroller, delay)
  }

  // todo - CLUNKY! 💩
  function scroller() {
    let scrollTop = document.documentElement.scrollTop
    let stretchHeight = hero.offsetHeight
    let scaleFactor =  (stretchHeight - scrollTop) / stretchHeight
    // console.log(scrollTop)
    // console.log(stretchHeight)
    // console.log(scaleFactor)
    if (scaleFactor > 0.4) {
      header.style.transform = 'scale(' + scaleFactor + ')'
      // hero.style.transform = 'scale(' + scaleFactor + ')'
      
      headline.style.animation = 'headingUp'
      headline.style.animationDuration = '2s'
      headline.style.animationFillMode ='forwards'

    }
    // header.style.height = hero.offsetHeight + 'px'
    // header.style.height = '100px'
    // header.style.background = '#ccc'
    blackness.style.height = '300px'    
  }

  // window.onresize = function (e) {
  //   let stretchWidth = hero.width
  //   console.log(stretchWidth)
  // }


//
//
/// smerking tabs! 🚬  so easy...eventually
  
  nav.addEventListener('click', (e) => {
    let newTab = e.target
    let newSection = $('.' + newTab.id)
    
    // deactivate old section and tab
    $hide(oldTab)
    $hide(oldSection)
    
    // activate new section and tab
    $show(newTab)
    $show(newSection)

    oldTab = newTab
    oldSection = newSection
  })

//
//
/// aQuery

  function $(element) {
    return document.querySelector(element)
  }

  function $all(elements) {
    return document.querySelectorAll(elements)
  }

  function $log(message) {
    console.log(message)
  }

  function $hide(element) {
    element.classList.remove('active')
  }

  function $show(element) {
    element.classList.add('active')
  }

//end aQuery