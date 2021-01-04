import React, { useContext, useState } from 'react';
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
  Keyboard,
  Animated
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const AuthenticationActivityLoader = () => {
  return (
    <View style={styles.activityIndicatorMainView}>
      <View style={styles.activityIndicatorView}>
        <ActivityIndicator 
          size={50}
          animating={true}
          color="#1db954"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  activityIndicatorMainView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14141490',
    position: 'absolute',
    top: 0,
    zIndex: 10
  },
  activityIndicatorView: {
    height: 150,
    width: 300,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: screenHeight > 640 ? 10 : 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default AuthenticationActivityLoader;