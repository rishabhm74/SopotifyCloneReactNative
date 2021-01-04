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
  Animated,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const EmailAlreadyExists = () => {

  const navigation = useNavigation();

  const goToLogin = () => {
    emailUsedError ? setEmailUsedError(false) : null;
    return navigation.navigate('Login');
  }

  const closeModal = () => {
    emailUsedError ? setEmailUsedError(false) : null;

  }

  return (
    <View style={styles.emailAlreadyInUseMainView}>
      <View style={styles.emailAlreadyInUseView}>
        <Text style={styles.emailConnectedText}>
          This email is already connected to an account.
        </Text>
        <Text style={styles.wantToLoginInstedText}>
          Do you want to log in instead?
        </Text>
        <TouchableNativeFeedback 
          onPress={() => goToLogin()}
        >
          <View style={styles.goToLoginButtonView}>
            <Text style={styles.goToLoginButtonViewText}>
              GO TO LOGIN
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => closeModal()}
        >
          <View  style={styles.closeTextView}>
            <Text style={styles.closeText}>
              CLOSE
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  emailAlreadyInUseMainView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14141490',
    position: 'absolute',
    top: 0,
    zIndex: 15
  },
  emailAlreadyInUseView: {
    width: screenHeight > 640 ? 350 : 305,
    height: 310,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: screenHeight > 640 ? 10 : 8,
    padding: 45,
    paddingTop: 50
  },
  emailConnectedText: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Product Sans Bold 700',
    textAlign: 'center',
  },
  wantToLoginInstedText: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Product-Sans-Regular',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 42,
  },
  goToLoginButtonView: {
    backgroundColor: '#1db954',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 14.5,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 100
  },
  goToLoginButtonViewText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Product Sans Bold 700',
    letterSpacing: 1.5,
    borderRadius: 100,
    textTransform: 'uppercase'
  },
  closeTextView: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor: 'red',
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  closeText: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Product Sans Bold 700',
    letterSpacing: 1.5,
  }
})

export default EmailAlreadyExists;