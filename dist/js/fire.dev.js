"use strict";

var app = initializeApp(firebaseConfig);
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