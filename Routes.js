import React, { useContext, useState, useEffect, useReducer } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { AuthContext, AuthProvider } from './AuthProvider';
import { db } from './src/config';
import database from '@react-native-firebase/database';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import ArtistsSelectionStack from './navigation/ArtistsSelectionStack';




const userDbReference = database().ref('/users');

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [ initializing, setInitializing ] = useState(true);
  const [ isUpdated, setIsUpdated ] = useState(false);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  };  
    
  const setIsUpdatedHandler = () => {
    // console.log("Data to send: ");
    // console.log(musicCategoryList);
    // console.log(artistList, '\n\n\n');
    let found;
    let userKey;
    userDbReference.on('value', function(snapshot) {
      const userData = snapshot.val();
      if ( userData !== null ) {
        Object.keys(userData).forEach(key => {
          let tempUserData = userData[key];
          console.log(tempUserData);
          if (tempUserData.artists && tempUserData.musicCategory) {
            setIsUpdated(true)
          }
        })
      }
    })

  }


  useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     setIsUpdatedHandler();
     return subscriber;
  }, []);

  if(initializing) return null;



  return (
    <NavigationContainer>
        {/* <View style={styles.mainAppView}> */}
          { user ?  (isUpdated ?  <AppStack /> : <ArtistsSelectionStack /> ) : <AuthStack />}
          
        {/* </View> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  mainAppView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#141414'
  }
})

export default Routes;
