import React from 'react';
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
  Alert
} from 'react-native';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SignUpScreen = ({navigation}) => {
  
  return (
    <View style={styles.signUpScreenView}>
      <View style={styles.authStackHeader}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signUpScreenView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#141414'
  },  
  authStackHeader: {
    height: 60,
    width: screenWidth,
    backgroundColor: '#141414',
    marginTop: StatusBar.currentHeight
  }
})


export default SignUpScreen;