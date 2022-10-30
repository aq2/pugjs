"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js");

var firebaseConfig = {
  apiKey: "AIzaSyA8iNFJmvZUymc2nybinXIX7CQCVQ1XYpc",
  authDomain: "pugjs-1dd3d.firebaseapp.com",
  projectId: "pugjs-1dd3d",
  storageBucket: "pugjs-1dd3d.appspot.com",
  messagingSenderId: "869334856470",
  appId: "1:869334856470:web:030887cfe7e660188b1637"
};
console.log('hey'); // Initialize Firebase

var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var dbRef = firebase.database().ref();
var usersRef = dbRef.child('users');
var userListUI = document.getElementById("userList");
usersRef.on("child_added", function (snap) {
  var user = snap.val();
  var $li = document.createElement("li");
  $li.innerHTML = user.name;
  $li.setAttribute("child-key", snap.key);
  $li.addEventListener("click", userClicked);
  userListUI.append($li);
});

function userClicked(e) {
  var userID = e.target.getAttribute("child-key");
  var userRef = dbRef.child('users/' + userID);
  var userDetailUI = document.getElementById("userDetail");
  userDetailUI.innerHTML = "";
  userRef.on("child_added", function (snap) {
    var $p = document.createElement("p");
    $p.innerHTML = snap.key + " - " + snap.val();
    userDetailUI.append($p);
  });
}