/// aQuery

function $all(elements) {
  return document.querySelectorAll(elements)
}

function $id(element) {
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