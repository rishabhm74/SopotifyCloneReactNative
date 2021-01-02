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
  TextInput
} from 'react-native';

import AuthStackHeader from '../components/AuthStackHeader';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthProvider';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const FinalUserNameScreen = ({ route }) => {
  const [userName, setUserName] = useState('');
  const [nextState, setNextState] = useState(true)

  const { userEmail, userPassword, userGender } = route.params;

  const { register } = useContext(AuthContext)


  const navigation = useNavigation();

  const moveToGenderPage = () => {
    if (userName.length > 0) { 
      // return navigation.navigate('LoginGreet')
      return register(userEmail, userPassword);
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
    height: screenHeight > 640 ? 180 : 160,
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
  }
})


export default FinalUserNameScreen;