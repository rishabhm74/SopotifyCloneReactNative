import React, { createContext, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableNativeFeedback,
  Dimensions,
  Alert,
  TextInput,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: (email, password) => auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("logged in")
          return true
        })
        ,
        register: (email, password) => auth().createUserWithEmailAndPassword(email, password).
        then(() => {
          console.log("user created")
          return true
        })
        ,
        logout: async () => {
          try {
            await auth().signOut();
          } catch(e) {
            console.log(e)
            // Alert.alert(e);
          }
        }
        // login: async (email, password) => {
        //   try {
        //     await auth().signInWithEmailAndPassword(email, password);
        //     console.log("success")
        //     return true
        //   } catch(e) {
        //     console.log(e)
        //     Keyboard.dismiss();
        //     console.log("no success")
        //     return false
        //     // e.line == 24147 ? Alert.alert("Opps, looks like your email address or password is incorrect!") : null;
        //     // return(console.log(e.line))
        //   }
          
        // },
        // .catch(error => {
        //   if (error.code === 'auth/invalid-email') {
        //     Alert.alert("Opps, looks like your email address is invalid");
        //   }
        //   if (error.code === 'auth/user-disabled') {
        //     Alert.alert("Opps, looks like your email address has been disabled!");
        //   }
        //   if (error.code === 'auth/user-not-found') {
        //     Alert.alert("Opps, looks like your email and password combination is incorrect!");
        //   }
        //   if (error.code === 'auth/wrong-password') {
        //     Alert.alert("Opps, looks like your email and password combination is incorrect!");
        //   }
        //   return false
        // })
        
        // register: async (email, password) => {
        //   try {
        //     await auth().createUserWithEmailAndPassword(email, password);
        //   } catch(e) {
        //     console.log(e);
        //   }
        // },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}