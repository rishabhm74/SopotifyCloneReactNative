import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const LoginGreetScreen = ({navigation}) => {
  return (
    <ScrollView 
      style={styles.loginGreetScreenView} 
      showsVerticalScrollIndicator={false}
    >
      <StatusBar 
        backgroundColor="#14141499" 
        barStyle="light-content" 
        translucent={true}
        />
      <View style={styles.loginGreetImgContainer} >
        <Image 
          source={require('../assets/images/accountGreetScreen.png')} 
          style={styles.loginGreetImgContainerImg}
        />
      </View>
      <View style={styles.loginGreetScreenViewTagLineContainer}>
        <Image 
          source={require('../assets/icons/mainIcon.png')} 
          style={styles.loginGreetImgContainerMainIcon}
        />
        <Text style={styles.tagLineText}>
          Millions of songs.{'\n'}Free on Spotify.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('SignUpEmail')}>
          <View style={styles.signUpFreeButton}>
            <Text style={styles.signUpFreeButtonText}>
              Sign up free
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.signUpButtons}>
            <View style={styles.signUpButtonsIconLogoContainer}>
              <Image 
                source={require('../assets/icons/phone.png')}
                style={styles.signUpButtonsLogo}
              />
            </View>
            <View style={styles.signUpButtonsTextContainerPhone}>
              <Text style={styles.signUpButtonsText}>
                Continue with phone number
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.signUpButtons}>
            <View style={styles.signUpButtonsIconLogoContainer}>
              <Image 
                source={require('../assets/icons/google.png')}
                style={styles.signUpButtonsLogo}
              />
            </View>
            <View style={styles.signUpButtonsTextContainer}>
              <Text style={styles.signUpButtonsText}>
                Continue with Google
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.signUpButtons}>
            <View style={styles.signUpButtonsIconLogoContainer}>
              <Image 
                source={require('../assets/icons/facebook.png')}
                style={styles.signUpButtonsLogo}
              />
            </View>
            <View style={styles.signUpButtonsTextContainer}>
              <Text style={styles.signUpButtonsText}>
                Continue with Facebook
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Login')}>
          <View style={styles.signUpButtonsLoginButton}>
            <Text style={styles.signUpButtonsText}>
              Log in
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loginGreetScreenView: {
    flex: 1,
    backgroundColor: '#141414',
    width: '100%'
  },
  loginGreetImgContainer: {
    width: '100%',
    // height: screenHeight > 640 ? 300 : 250,
    height: 300,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  loginGreetImgContainerImg: {
    height: '100%',
    width: '100%'
  },
  loginGreetScreenViewTagLineContainer: {
    width: '100%',
    height: screenHeight > 640 ? 295 : 280,
    // height: 300,
    // backgroundColor: '#ff00003f',
    position: 'absolute',
    top: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 5
  },
  tagLineText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 36,
  },
  loginGreetImgContainerMainIcon: {
    height: 55,
    width: 55,
    backgroundColor: '#ffffff00',
    marginBottom: 25
  },
  buttonsContainer: {
    height: 'auto',
    // minHeight: 350,
    minHeight: screenHeight > 640 ? 350 : 260,
    // paddingTop: 60,
    paddingTop: screenHeight > 640 ? 60 : 40,
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'column',
    // paddingBottom: 50,
    paddingBottom: screenHeight > 640 ? 50 : 30,
  },
  signUpFreeButton: {
    width: screenHeight > 640 ? 310 : 290,
    // width: 310,
    height: screenHeight > 640 ? 50 : 45,
    // height: 50,
    borderRadius: 55,
    backgroundColor: '#1db954',
    // backgroundColor: '#1ed761',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpFreeButtonText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 16
  },
  signUpButtons: {
    width: screenHeight > 640 ? 310 : 290,
    // width: 310,
    height: screenHeight > 640 ? 50 : 45,
    // height: 50,
    borderRadius: 55,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ffffff60',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  signUpButtonsLogo: {
    height: screenHeight > 640 ? 20 : 17,
    width: screenHeight > 640 ? 20 : 17,
    // width: 20
  },
  signUpButtonsIconLogoContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpButtonsTextContainer: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    // backgroundColor: 'red',

    paddingRight: '20%'
  },
  signUpButtonsText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 14,
    lineHeight: 15,
    textAlign: 'center'
  },
  signUpButtonsTextContainerPhone: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    // backgroundColor: 'red',
    // paddingLeft: '7%'
    paddingRight: '16.5%'
  },
  signUpButtonsLoginButton: {
    marginTop: 12.5,
    // width:150,
    // height: 55,
    // justifyContent: 'center',
    // alignItems:'center'
  }
})

export default LoginGreetScreen;