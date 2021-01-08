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
        
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}