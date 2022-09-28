// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClRhu8qrYWgKCgzWSOJ2B57EZqNQPTCv8",
  authDomain: "nachshoes-5e892.firebaseapp.com",
  projectId: "nachshoes-5e892",
  storageBucket: "nachshoes-5e892.appspot.com",
  messagingSenderId: "37390239702",
  appId: "1:37390239702:web:9208388f6c8a8bd9780677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseFetch = async (idcategory) =>{
    let q;
  
    if(idcategory){
        
        q = query(collection(db, "products"), where ('categoryid', '==', idcategory));
    }else{
       
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc=>({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
  }


//un solo producto
 export const firebaseDos = async (id) =>{
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
     return{id: docSnap.id, ...docSnap.data()}
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    
} 