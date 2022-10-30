"use strict";

var _firebaseApp = require("https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js");

var _firebaseFirestore = require("https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firebaseConfig = {
  apiKey: "AIzaSyA8iNFJmvZUymc2nybinXIX7CQCVQ1XYpc",
  authDomain: "pugjs-1dd3d.firebaseapp.com",
  projectId: "pugjs-1dd3d",
  storageBucket: "pugjs-1dd3d.appspot.com",
  messagingSenderId: "869334856470",
  appId: "1:869334856470:web:030887cfe7e660188b1637"
};
var app = (0, _firebaseApp.initializeApp)(firebaseConfig);
var db = (0, _firebaseFirestore.getFirestore)(app); // console.log(db)

var getBtn = document.querySelector('#getData');
getBtn.addEventListener('click', function (e) {
  (0, _firebaseFirestore.getDoc)((0, _firebaseFirestore.doc)(db, 'users', '0')).then(function (docSnap) {
    if (docSnap.exists()) {
      console.log(docSnap.data());
      console.log(docSnap.data()['name']);
    } else {
      console.log('nope');
    }
  }); // query

  var q = (0, _firebaseFirestore.query)((0, _firebaseFirestore.collection)(db, 'users'), (0, _firebaseFirestore.where)('age', '==', 45));
  (0, _firebaseFirestore.getDocs)(q).then(function (docSnap) {
    var users = [];
    docSnap.forEach(function (doc) {
      users.push(_objectSpread({}, doc.data(), {
        id: doc.id
      }));
    });
    console.log('query data', users[0]);
  }); // get all

  (0, _firebaseFirestore.getDocs)((0, _firebaseFirestore.collection)(db, 'users')).then(function (docSnap) {
    var users = [];
    docSnap.forEach(function (doc) {
      users.push(_objectSpread({}, doc.data(), {
        id: doc.id
      }));
    });
    console.log('all data', users);
  });
});