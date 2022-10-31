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
// const docRef = doc(db, 'yogaWorkshops')
// let docRef = doc(db, 'yogaWorkshops')

// todo collections Ref?
const yoga = collection(db, 'yogaworkshops')


// get them all
let allShops = []
const allSnap = await getDocs(collection(db, "yogaWorkshops"));
// const allSnap = await getDocs(yoga) // nope
allSnap.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
  allShops.push({ ...doc.data(), id: doc.id })
});


// probably be easier for me just to get them all, then map/reduce/filter queries?
// no need to import query and where above
// get nth doc - 0 here
const NdocRef = doc(db, 'yogaWorkshops', '0')
const snapper = await(getDoc(NdocRef))
if (snapper.exists()) {
  // console.log("Document data:", snapper.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

// do a query on derek
const newQ = query(collection(db, 'yogaWorkshops'), where('location', '==', 'derek'));
const querySnapshot = await getDocs(newQ);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
});






// await sync
console.log('lastly', allShops)
// we need to export this