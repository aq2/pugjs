/// stretch
  const stretch = $get('#stretch')
  const header = $get('header')  
  const headline = $get('h1')  
  const nav = $get('nav')
  const main = $get('main')

  // let stretchHeight = stretch.height
  let stretchHeight = stretch.offsetHeight
  let stretchWidth = stretch.width
  let headerHeight = stretch.offsetHeight + nav.offsetHeight
  // init()

function init() {
  // headline.style.transform = 'translateY(200px)'
  // nav.style.transform = 'translateY(436px)'
  // console.log(stretch.offsetHeight)
  // nav.style.transform = 'translateY(-' + stretch.offsetHeight +'px)'
  // main.style.transform = 'translateY(' + headerHeight + 'px)'
}


  // myMove()
    // function myMove() {
    //   let id = null;
    //   const elem = document.getElementById("om");
    //   let pos = 0;
    //   clearInterval(id);
    //   id = setInterval(frame, 5);
    //   function frame() {
    //     if (pos == 2350) {
    //       clearInterval(id);
    //     } else {
    //       pos++;
    //       elem.style.top = pos + 'px';
    //       elem.style.left = pos + 'px';
    //     }
    //   }
    // }

  window.onresize = function (e) {
      let stretchWidth = stretch.width
      console.log(stretchWidth)
  }

  let delay = 150
  let range = 'XXX'
  let timeout = false
  window.onscroll = function (e) {
    clearTimeout(timeout)
    timeout = setTimeout(scroller, delay)
  }

  function scroller() {
    let scrollTop = document.documentElement.scrollTop
    let stretchHeight = stretch.offsetHeight
    let scaleFactor = (stretchHeight - scrollTop) / stretchHeight
    // console.log(scrollTop)
    // console.log(stretchHeight)
    // console.log(scaleFactor)
    // todo maths nope 👇
    stretch.style.transform = 'scale(' + scaleFactor + ')'
    // console.log(parseInt(scrollFactor) + ' f')
    // header.style.transform = 'scale(' + scrollFactor + '0.4)'
    // header.style.transform = 'scale(' + scrollFactor + '0.4)'
    // header.style.transform = 'scale(0.4)'
    // init()
  }


  window.addEventListener('scroll', () => {
    // scrollIt()
  })




/// aQuery

function $all(elements) {
  return document.querySelectorAll(elements)
}

function $get(element) {
  return document.querySelector(element)
}

function $log(message) {
  console.log(message)
}

function $hide(element) {
  element.style.display = 'none'
  element.classList.remove('active')
}

function $show(element) {
  element.classList.add('active')
}

//end aQuery