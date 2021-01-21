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
  const [ phoneNumber, setPhoneNumber ] = useState('')



  return (
    
    <View style={styles.phoneAuthScreenView}>
      <LoginHeader />
      <View style={styles.signUpScreen}>
        <Text style={styles.whatsYourEmailText}>
          Enter phone number
        </Text>

        <View style={styles.phoneNumberEnterScreen}>
          <View style={styles.coutryContainer}>
            <Text style={styles.countryName}>
              India
            </Text>
          </View>
          <View style={styles.mainNumberContainer}>
            <View style={styles.countryCodeContainer}>
              <Text  style={[styles.countryName, { fontSize: 16 }]}>
                +91
              </Text>
            </View>
            <View style={styles.mainNumber}>
              <TextInput 
                placeholder="Phone number"
                style={styles.numberInput}
                placeholderTextColor='#ffffff45'
                onChangeText={number => setPhoneNumber(number)}
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
                value={phoneNumber}
              />
            </View>
          </View>
        </View>

        <Text style={styles.confirmEmailText}>
          We'll send you a code by SMS to confirm your phone number.
        </Text>

      </View>
      <View style={styles.nextButtonContainer}>
          <View>
            {
              phoneNumber.length === 10 ?
              <TouchableNativeFeedback
                disabled={false}
                // onPress={moveToGenderPage}
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
                // onPress={moveToGenderPage}
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
    height: screenHeight > 640 ?  220 : 187,
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
    marginBottom: screenHeight > 640 ? 15 : 12.5
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
  },
  coutryContainer: {
    width: '100%',
    height: '50%',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff30',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  mainNumberContainer: {
    width: '100%',
    height: '50%',
    flexDirection: 'row'
  },
  countryCodeContainer: {
    height: '100%',
    width: '16%',
    borderRightWidth: 1,
    borderRightColor: '#ffffff30',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainNumber: {
    height: '100%',
    width: '84%'
  },
  countryName: {
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 17
  },
  numberInput: {
    width: '100%',
    height: '100%',
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 16,
    paddingLeft: 20
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
    marginTop: 20,
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
    marginTop: 20,
  },
  emailNextButtonTextDisabled: {
    fontSize: 16,
    color: '#141414',
    fontFamily: 'Product Sans Bold 700',
    textTransform: 'uppercase',
  },
  nextButtonContainer: {
    alignItems: 'center',
    width: '100%'
  }
})

export default PhoneAuthScreen;