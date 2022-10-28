"use strict";

/// hero
var hero = $get('#hero');
var header = $get('header');
var headline = $get('h1');
var nav = $get('nav');
var main = $get('main');
var strootch = $get('#strootch'); // let stretchHeight = hero.height
// let stretchHeight = hero.offsetHeight
// let stretchWidth = hero.width
// let headerHeight = hero.offsetHeight + nav.offsetHeight
// init()

function init() {
  // headline.style.transform = 'translateY(200px)'
  // nav.style.transform = 'translateY(436px)'
  // console.log(hero.offsetHeight)
  // nav.style.transform = 'translateY(-' + hero.offsetHeight +'px)'
  // nav.style.transform = 'translateY(-' + 200 +'px)'
  nav.style.transform = 'translateY(-' + hero.offsetHeight + 'px)'; // main.style.transform = 'translateY(-' + nav.offsetHeight + 'px)'
  // header.style.height = hero.offsetHeight + nav.offsetHeight

  header.style.height = hero.offsetHeight + nav.offsetHeight + 'px';
  console.log(header.style.height);
  strootch.style.height = 100 - hero.offsetHeight + 'px'; // main.style.transform = 'translateY(' + -200 + 'px)'
}

var delay = 2;
var range = 'XXX';
var timeout = false;

window.onscroll = function (e) {
  clearTimeout(timeout);
  timeout = setTimeout(scroller, delay);
};

function scroller() {
  var scrollTop = document.documentElement.scrollTop;
  var stretchHeight = hero.offsetHeight;
  var scaleFactor = (stretchHeight - scrollTop) / stretchHeight; // console.log(scrollTop)
  // console.log(stretchHeight)

  console.log(scaleFactor); // todo maths nope 👇

  if (scaleFactor > 0.5) {
    hero.style.transform = 'scale(' + scaleFactor + ')';
  } // bring the nav up
  // nav.style.top = '' + hero.height + 'px'
  // nav.style.transform = 'translateY(10px)'
  // nav.style.transform = 'translateY(' + hero.offsetHeight + 'px'

} // window.onresize = function (e) {
//   let stretchWidth = hero.width
//   console.log(stretchWidth)
// }
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
//
/// aQuery


function $all(elements) {
  return document.querySelectorAll(elements);
}

function $get(element) {
  return document.querySelector(element);
}

function $log(message) {
  console.log(message);
}

function $hide(element) {
  element.style.display = 'none';
  element.classList.remove('active');
}

function $show(element) {
  element.classList.add('active');
} //end aQuery