"use strict";

/// init
var hero = $('#hero');
var header = $('header');
var headline = $('h1');
var nav = $('nav'); // const main = $('main')

var blackness = $('#blackness'); // const tabs = $all('.tab')
// let newSection = 'welcome'

var firstPage = 'welcome'; ///

var oldSection = $('.' + firstPage);
var oldTab = $('#' + firstPage);
oldTab.classList.add('active');
oldSection.classList.add('active'); //
//
/// hero

var delay = 2;
var range = 'XXX';
var timeout = false;

window.onscroll = function (e) {
  // todo only bother calling these if scrolltop not exceeded?
  clearTimeout(timeout);
  timeout = setTimeout(scroller, delay);
}; // todo - CLUNKY! 💩


function scroller() {
  var scrollTop = document.documentElement.scrollTop;
  var stretchHeight = hero.offsetHeight;
  var scaleFactor = (stretchHeight - scrollTop) / stretchHeight; // console.log(scrollTop)
  // console.log(stretchHeight)
  // console.log(scaleFactor)

  if (scaleFactor > 0.4) {
    header.style.transform = 'scale(' + scaleFactor + ')'; // hero.style.transform = 'scale(' + scaleFactor + ')'

    headline.style.animation = 'headingUp';
    headline.style.animationDuration = '2s';
    headline.style.animationFillMode = 'forwards';
  } // header.style.height = hero.offsetHeight + 'px'
  // header.style.height = '100px'
  // header.style.background = '#ccc'


  blackness.style.height = '300px';
} // window.onresize = function (e) {
//   let stretchWidth = hero.width
//   console.log(stretchWidth)
// }
//
//
/// smerking tabs!


nav.addEventListener('click', function (e) {
  var newTab = e.target;
  var newSection = $('.' + newTab.id); // newTab.style.color = 'green' /// -> or display = none/block
  // deactivate old section and tab

  oldSection.classList.remove('active');
  oldTab.classList.remove('active'); // activate new section and tab

  newTab.classList.add('active');
  newSection.classList.add('active');
  oldSection = newSection;
  oldTab = newTab;
}); //
//
/// aQuery

function $(element) {
  return document.querySelector(element);
}

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