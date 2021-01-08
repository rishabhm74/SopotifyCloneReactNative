import React, { useContext, useEffect , useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
} from 'react-native';
import { AuthContext } from '../AuthProvider';
import database from '@react-native-firebase/database';


const userDbReference = database().ref('/users');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const MainHomeScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.mainHomeScreenView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />


      <Button
        title="logout"
        onPress={() => logout()}
      />

    </View>
    
  )
}

const styles = StyleSheet.create({
  mainHomeScreenView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MainHomeScreen;