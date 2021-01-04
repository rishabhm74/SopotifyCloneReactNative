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

import AuthStackHeader from '../components/AuthStackHeader';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthProvider';
import AuthenticationActivityLoader from '../components/AuthenticationActivityLoader';

import { db } from '../src/config';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const FinalUserNameScreen = ({ route, navigation }) => {
  const { userEmail, userPassword, userGender } = route.params;
  const userNameFromEmail = userEmail.substring(0, userEmail.lastIndexOf("@"));
  const [ loading, setLoading ] = useState(false);

  const [userName, setUserName] = useState(userNameFromEmail);
  const [nextState, setNextState] = useState(true);
  const [ occuredError, setOccuredError ] = useState();
  const [ emailUsedError, setEmailUsedError ] = useState(false);

  

  const { register } = useContext(AuthContext)


  // const navigation = useNavigation();

  const goToLogin = () => {
    emailUsedError ? setEmailUsedError(false) : null;
    return navigation.navigate('Login');
  }

  const closeModal = () => {
    emailUsedError ? setEmailUsedError(false) : null;

  }

  const moveToGenderPage = () => {
    if (userName.length > 0) { 
      // return navigation.navigate('LoginGreet')
      
      Keyboard.dismiss();
      setLoading(!loading);
      register(userEmail, userPassword)
      .catch(error => {
        setLoading(false);
        if (error.code === 'auth/email-already-in-use') {
          // setOccuredError('This email is already connected to an account.')
          !emailUsedError ? setEmailUsedError(true) : null
        }
        return false
      });
      db.ref('/users').push({
        userName: userNameFromEmail,
        email: userEmail,
        gender: userGender
      });
    }
  }
  
  return (
    <View style={styles.signUpScreenView}>
      <AuthStackHeader />
      <View style={styles.signUpScreen}>
        <Text style={styles.whatsYourEmailText}>
          What's your name?
        </Text>
        <TextInput 
          onChangeText={(userName) => setUserName(userName)}
          style={styles.emailInputBar}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
        />
        <Text style={styles.confirmEmailText}>
         This appears on your Spotify profile.
        </Text>
      </View>

      <View>
          {userName.length  > 0 ?
            <TouchableNativeFeedback
              disabled={false}
              onPress={moveToGenderPage}
            >
              <View 
                style={styles.emailNextButtonViewNotDisabled}
              >
                <Text style={styles.emailNextButtonTextNotDisabled}>
                  CREATE
                </Text>
              </View>
            </TouchableNativeFeedback> :
            <TouchableNativeFeedback
              disabled={true}
              onPress={moveToGenderPage}
            >
              <View 
                style={styles.emailNextButtonViewDisabled  }
              >
                <Text style={styles.emailNextButtonTextDisabled}>
                  CREATE
                </Text>
              </View>
            </TouchableNativeFeedback>
          }
      </View>
      <View style={styles.termsAndConditionContainer}>
        <Text style={styles.termsAndConditionText}>
          By creating an account, you agree to Spotify's <Text style={styles.termsAndConditionTextUnderline}>Terms of Service</Text>.
        </Text>
        <Text style={styles.termsAndConditionText}>
          To learn more about how Spotify collects, uses, shares and protects your personal, data please read Spotify's <Text style={styles.termsAndConditionTextUnderline}>Privacy Policy</Text>.
        </Text>
        <Text style={styles.termsAndConditionText}>
          We may occasionally send you service-based messages.
        </Text>
      </View>
      <Text style={styles.recaptchaText}>
        PROTECTED BY RECAPTCHA
      </Text>
        
      {
        loading ? <AuthenticationActivityLoader />: null
      }


      {
        emailUsedError ? 
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
        </View> : null
      }

      {/* { occuredError ?
      <Text style={styles.errorText}>
        {occuredError} here
      </Text> : null
      } */}

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
    height: screenHeight > 640 ? 180 : 145,
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: screenHeight > 640 ? 20 : 15,
  },
  whatsYourEmailText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 22,
    marginBottom: screenHeight > 640 ? 12 : 10
  },
  emailInputBar: {
    backgroundColor: '#616060',
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
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight > 640 ? 47 : 43,
    borderRadius: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  emailNextButtonTextNotDisabled: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Product Sans Bold 700',
    textTransform: 'uppercase',
  },
  emailNextButtonViewDisabled: {
    backgroundColor: '#616060',
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight > 640 ? 47 : 43,
    borderRadius: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  emailNextButtonTextDisabled: {
    fontSize: 16,
    color: '#141414',
    fontFamily: 'Product Sans Bold 700',
    textTransform: 'uppercase',

  },
  termsAndConditionContainer: {
    width: '100%',
    height: screenHeight > 640 ? 155 : 135,
    // backgroundColor: 'red',
    marginTop: 30,
    padding: 25,
    paddingTop: 0
  },
  termsAndConditionText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    textAlign: 'center',
    marginBottom: 20
  },
  termsAndConditionTextUnderline: {
    textDecorationStyle: 'solid',
    textDecorationColor: '#fff',
    textDecorationLine: 'underline'
  },
  recaptchaText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#ffffff50',
    fontSize: 11,
    
    letterSpacing: 0.25
  },
  errorText: {
    fontSize: 13.5,
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
  },
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


export default FinalUserNameScreen;