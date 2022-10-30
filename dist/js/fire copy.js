import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js"

      const firebaseConfig = {
        apiKey: "AIzaSyA8iNFJmvZUymc2nybinXIX7CQCVQ1XYpc",
        authDomain: "pugjs-1dd3d.firebaseapp.com",
        projectId: "pugjs-1dd3d",
        storageBucket: "pugjs-1dd3d.appspot.com",
        messagingSenderId: "869334856470",
        appId: "1:869334856470:web:030887cfe7e660188b1637"
      }

      // Initialize Firebase
      const app = initializeApp(firebaseConfig)

      const dbRef = firebase.database().ref();
      const usersRef = dbRef.child('users');
      
      const userListUI = document.getElementById("userList");
      usersRef.on("child_added", snap => {
          let user = snap.val();
          let $li = document.createElement("li");
          $li.innerHTML = user.name;
          $li.setAttribute("child-key", snap.key);
          $li.addEventListener("click", userClicked)
          userListUI.append($li)
      });


      function userClicked(e) {
        var userID = e.target.getAttribute("child-key");
        const userRef = dbRef.child('users/' + userID);
        const userDetailUI = document.getElementById("userDetail");
        userDetailUI.innerHTML = ""
        userRef.on("child_added", snap => {
            var $p = document.createElement("p");
            $p.innerHTML = snap.key + " - " + snap.val()
            userDetailUI.append($p);
        });
    }