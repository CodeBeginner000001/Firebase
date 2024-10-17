// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"
import {
  getFirestore,
  collection,
  onSnapshot,  // setting up real time listener
  addDoc,
  deleteDoc,
  doc, // reference for a doc

  query,where, // Firebase Query
  orderBy,
  serverTimestamp,
}from "firebase/firestore"

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