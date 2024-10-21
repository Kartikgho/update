// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {  getDoc,doc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXxLr2dG_9ouIKutQz0P68CUA0a2no6e8",
  authDomain: "school-b7ba8.firebaseapp.com",
  projectId: "school-b7ba8",
  storageBucket: "school-b7ba8.appspot.com",
  messagingSenderId: "575529125234",
  appId: "1:575529125234:web:8d41b15fe19f5d404dc9eb",
  measurementId: "G-NVBSQMY6YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const deb =getFirestore(app);

// export {deb}
const getSiteData= async()=>{
    try {
        const id="www.educator.in"
        const listRef=doc(deb,"sites",id);
        const snapshot=await getDoc(listRef);
        const listData=snapshot.data()
        console.log(listData);
        return listData;        
    } catch (error) {
        console.log("error at firebase",error);
        
    }
    
}
export {getSiteData};