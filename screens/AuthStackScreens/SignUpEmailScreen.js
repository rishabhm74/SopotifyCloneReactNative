import React, { useState } from 'react';
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
  TextInput
} from 'react-native';

import AuthStackHeader from '../../components/AuthStackHeader';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SignUpEmailScreen = () => {
  const [email, setEmail] = useState('');
  const [nextState, setNextState] = useState(true)

  const navigation = useNavigation();

  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const moveToCreatePassword = () => {
    if (email.length > 0) {
      if (reg.test(email) === true){
        return navigation.navigate('CreatePassword', {
          userEmail: email
        });
      } 
    }
  }
  
  return (
    <View style={styles.signUpScreenView}>
      <AuthStackHeader />
      <View style={styles.signUpScreen}>
        <Text style={styles.whatsYourEmailText}>
          What's your email?
        </Text>
        <TextInput 
          onChangeText={(userEmail) => setEmail(userEmail)}
          style={styles.emailInputBar}
          keyboardType='email-address'
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          autoFocus={true}
        />
        <Text style={styles.confirmEmailText}>
          You'll need to confirm this email later.
        </Text>
      </View>


      <View>
        {
          email.length > 0 && reg.test(email) === true ?
          <TouchableNativeFeedback
            disabled={false}
            onPress={moveToCreatePassword}
          >
            <View 
              style={styles.emailNextButtonViewNotDisabled}
            >
              <Text style={styles.emailNextButtonTextNotDisabled}>
                NEXT
              </Text>
            </View>
          </TouchableNativeFeedback> :
          <TouchableNativeFeedback
            disabled={true}
            onPress={moveToCreatePassword}
          >
            <View 
              style={styles.emailNextButtonViewDisabled  }
            >
              <Text style={styles.emailNextButtonTextDisabled}>
                NEXT
              </Text>
            </View>
          </TouchableNativeFeedback>



        }
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
  signUpScreen: {
    width: screenWidth,
    height: screenHeight > 640 ? 190 : 170,
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: screenHeight > 640 ? 20 : 15,
  },
  whatsYourEmailText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 30,
    marginBottom: screenHeight > 640 ? 12 : 10
  },
  emailInputBar: {
    backgroundColor: '#424242',
    width: '100%',
    borderRadius: 5,
    padding: 10,
    height: screenHeight > 640 ? 55 : 50,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
    marginBottom: screenHeight > 640 ? 12 : 10
  },
  confirmEmailText: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
  },
  emailNextButtonViewNotDisabled: {
    backgroundColor: '#fff',
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight > 640 ? 47 : 43,
    borderRadius: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12,
  },
  emailNextButtonTextNotDisabled: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Product Sans Bold 700',
    textTransform: 'uppercase',

  },
  emailNextButtonViewDisabled: {
    backgroundColor: '#616060',
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight > 640 ? 47 : 43,
    borderRadius: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12,
  },
  emailNextButtonTextDisabled: {
    fontSize: 16,
    color: '#141414',
    fontFamily: 'Product Sans Bold 700',
    textTransform: 'uppercase',

  },
})


export default SignUpEmailScreen;