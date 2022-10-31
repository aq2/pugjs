let firstPage = 'welcome' //?
/// init
  
  const hero = $('#hero')
  const header = $('header')  
  const headline = $('h1')  
  const nav = $('nav')
  
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
  // window.onscroll = function (e) {
  //   // todo only bother calling these if scrolltop not exceeded?
  //   clearTimeout(timeout)
  //   timeout = setTimeout(scroller, delay)
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

    // todo position the section? scroll upo or whateva
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