/// stretch
  const stretch = $get('#stretch')
  myMove()

  function myMove() {
    let id = null;
    const elem = document.getElementById("om");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }

  window.onscroll = function (e) {
    // scrollIt()
    // console.log(document.documentElement.scrollTop)
    stretch.style.transform = 'scale(0.4)'
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