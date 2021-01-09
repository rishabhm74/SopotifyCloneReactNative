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
// import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import MainAppStack from './navigation/MainAppStack';



const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [ initializing, setInitializing ] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  };  
    



  useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return subscriber;
  }, []);

  if(initializing) return null;



  return (
    <NavigationContainer>
        {/* <View style={styles.mainAppView}> */}
          {/* { user ?   <AppStack /> : <AuthStack />} */}
          { user ?   <MainAppStack /> : <AuthStack />}
          
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
