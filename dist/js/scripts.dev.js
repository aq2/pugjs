"use strict";

/// stretch
var stretch = $get('#stretch');
var header = $get('header');
var headline = $get('h1');
var nav = $get('nav');
var main = $get('main'); // let stretchHeight = stretch.height

var stretchHeight = stretch.offsetHeight;
var stretchWidth = stretch.width;
var headerHeight = stretch.offsetHeight + nav.offsetHeight; // init()

function init() {} // headline.style.transform = 'translateY(200px)'
// nav.style.transform = 'translateY(436px)'
// console.log(stretch.offsetHeight)
// nav.style.transform = 'translateY(-' + stretch.offsetHeight +'px)'
// main.style.transform = 'translateY(' + headerHeight + 'px)'
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
  var stretchWidth = stretch.width;
  console.log(stretchWidth);
};

var delay = 150;
var range = 'XXX';
var timeout = false;

window.onscroll = function (e) {
  clearTimeout(timeout);
  timeout = setTimeout(scroller, delay);
};

function scroller() {
  var scrollTop = document.documentElement.scrollTop;
  var stretchHeight = stretch.offsetHeight;
  var scaleFactor = (stretchHeight - scrollTop) / stretchHeight; // console.log(scrollTop)
  // console.log(stretchHeight)
  // console.log(scaleFactor)
  // todo maths nope 👇

  stretch.style.transform = 'scale(' + scaleFactor + ')'; // console.log(parseInt(scrollFactor) + ' f')
  // header.style.transform = 'scale(' + scrollFactor + '0.4)'
  // header.style.transform = 'scale(' + scrollFactor + '0.4)'
  // header.style.transform = 'scale(0.4)'
  // init()
}

window.addEventListener('scroll', function () {// scrollIt()
}); /// aQuery

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