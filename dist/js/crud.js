import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
    import { getFirestore, getDoc, doc, query, collection, where, getDocs } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
    const firebaseConfig = {
      apiKey: "AIzaSyA8iNFJmvZUymc2nybinXIX7CQCVQ1XYpc",
      authDomain: "pugjs-1dd3d.firebaseapp.com",
      projectId: "pugjs-1dd3d",
      storageBucket: "pugjs-1dd3d.appspot.com",
      messagingSenderId: "869334856470",
      appId: "1:869334856470:web:030887cfe7e660188b1637"
    }
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)

    // console.log(db)

    const getBtn = document.querySelector('#getData')
      getBtn.addEventListener('click', (e) => {
        getDoc(doc(db, 'users', '0' )).then(docSnap => {
          if (docSnap.exists()) {
            console.log(docSnap.data())
            console.log(docSnap.data()['name'])
          } else {
            console.log('nope')
          }
        })

        // query
        const q = query(collection(db, 'users'), where('age', '==', 45))
        getDocs(q).then(docSnap => {
          let users = []
          docSnap.forEach((doc) => {
            users.push({...doc.data(), id:doc.id})
          })
          console.log('query data', users[0])
        })

        // get all
        getDocs(collection(db, 'users')).then(docSnap => {
          let users = []
          docSnap.forEach((doc) => {
            users.push({...doc.data(), id:doc.id})
          })
          console.log('all data', users)
        })
      })