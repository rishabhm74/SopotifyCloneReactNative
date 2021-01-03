// import Firebase from '@react-native-firebase/app';
import Firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB8oTFiKUvrVIupVEC32hAgJwhUd5IueSY",
  authDomain: "spotifyclone-5198e.firebaseapp.com",
  databaseURL: "https://spotifyclone-5198e-default-rtdb.firebaseio.com",
  projectId: "spotifyclone-5198e",
  storageBucket: "spotifyclone-5198e.appspot.com",
  messagingSenderId: "868736299817",
  appId: "1:868736299817:web:3601a432fc46282be5bd38",
  measurementId: "G-QV2G1FG065"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();