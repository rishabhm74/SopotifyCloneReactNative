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
  Keyboard
} from 'react-native';
import LoginHeader from '../../components/LoginHeader';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const PhoneAuthScreen = () => {
  const [ phoneNumber, setPhoneNumber ] = useState(null)



  return (
    
    <View style={styles.phoneAuthScreenView}>
      <LoginHeader />
      <View style={styles.signUpScreen}>
        <Text style={styles.whatsYourEmailText}>
          Enter phone number
        </Text>

        <View style={styles.phoneNumberEnterScreen}>

        </View>

        <Text style={styles.confirmEmailText}>
          We'll send you a code by SMS to confirm your phone number.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  phoneAuthScreenView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#141414'
  }, 
  signUpScreen: {
    width: screenWidth,
    height: screenHeight > 640 ?  215 : 190,
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: screenHeight > 640 ? 20 : 15,
  },
  whatsYourEmailText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 30.5,
    marginBottom: screenHeight > 640 ? 12 : 10
  },
  confirmEmailText: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
  },
  phoneNumberEnterScreen: {
    width: '100%',
    backgroundColor: '#424242',
    borderRadius: 5,
    height: screenHeight > 640 ? 100 : 90,
    marginBottom: 12,
  }
})

export default PhoneAuthScreen;