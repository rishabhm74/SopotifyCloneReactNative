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
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch(e) {
            console.log(e)
            Keyboard.dismiss();
            e.line == 24147 ? Alert.alert("Opps, looks like your email address or password is incorrect!") : null;
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch(e) {
            console.log(e);
            Keyboard.dismiss();
            e.line == 24147 ? Alert.alert("Opps, Email address already exists!") : null;
          }
        },
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