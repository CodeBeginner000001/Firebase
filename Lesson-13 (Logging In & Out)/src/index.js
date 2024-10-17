// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"
import {
  getFirestore,
  collection,
  onSnapshot,  // setting up real time listener
  addDoc,
  deleteDoc,
  doc, // reference for a doc
  getDoc,
  updateDoc,
  query,where, // Firebase Query
  orderBy,
  serverTimestamp,
}from "firebase/firestore"

// Firebase Auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyByYYHumHvCNLycmZePiQ9UanBY96bEr3A",
  authDomain: "fir-learning-ca9a9.firebaseapp.com",
  projectId: "fir-learning-ca9a9",
  storageBucket: "fir-learning-ca9a9.appspot.com",
  messagingSenderId: "248212785307",
  appId: "1:248212785307:web:a23a9330afa7132e18de3e",
  measurementId: "G-F0SYP84E28",
};
// Init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore()
const auth = getAuth()
/*used in previse version of firebase */
// const db = firebase.firestore()
// db.collection('books');

// collection ref
const colRef = collection(db,'books')

// Queries
const q = query(colRef,orderBy("createdAt"))

// real time collection data
onSnapshot(q,(snapshot)=>{
    // console.log(snapshot);
    let books = []
    snapshot.docs.forEach((doc)=>{
      books.push({...doc.data(),id:doc.id})
    })
    console.log(books);
})

// add document
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  addDoc(colRef,{
    title: addBookForm.title.value,
    author:addBookForm.author.value,
    createdAt: serverTimestamp(),
  })
  .then(()=>{
    addBookForm.reset();
  })
})


// delete document
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  const docref = doc(db,'books', deleteBookForm.id.value)
  deleteDoc(docref)
  .then(()=>{
    deleteBookForm.reset();
  })
})

// get Single Document
const docRef = doc(db,"books","uHPSnKRIr90VXnPNoLkk")
// getDoc(docRef)
// .then((doc)=>{
//   console.log(doc.data(),doc.id)
// })
// Subscription to particular document
onSnapshot(docRef,(doc)=>{
  console.log(doc.data(),doc.id)
})

// Updating  a document
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit',(e)=>{
  e.preventDefault();

  const docRef = doc(db,"books",updateForm.id.value)

  updateDoc(docRef,{
    title: "updated Title",
  })
  .then(()=>{
    updateForm.reset();
  })
  .catch(()=>{
    console.log("Can't update");
  })
})
// mail - codebeginner@firebase.in
// password - Firebase
// signing users up
const signupForm = document.querySelector(".signup")
signupForm.addEventListener("submit",(e)=>{
  e.preventDefault()

  const email = signupForm.email.value
  const password = signupForm.password.value
  createUserWithEmailAndPassword(auth , email, password)
  .then((cred)=>{
    console.log("User Created",cred.user)
    signupForm.reset()
  })
  .catch((err)=>{
    console.log(err.message)
  })
})

// loggin in and out
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener("click",()=>{
  signOut(auth)
  .then(()=>{
    console.log("Logged Out")
  })
  .catch((err)=>{
    console.log(err.message)
  })
})
const loginForm = document.querySelector(".login")
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth,email,password)
  .then((cred)=>{
    console.log("User Logged in:",cred.user)
  })
  .catch((err)=>{
    console.log(err.message);
  })
})

