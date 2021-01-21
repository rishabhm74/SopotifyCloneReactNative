import React, { useContext, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';
import database from '@react-native-firebase/database';

import SettingsHeader from '../../components/SettingsHeader';
import { AuthContext } from '../../AuthProvider';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const userDbReference = database().ref('/users');



const SettingsScreen = () => {
  const { user, logout} = useContext(AuthContext);
  const [ theUserName, setUserName ] = useState('')

  useEffect(() => {
    userDbReference.once('value')
      .then(snapshot => {
        if ( snapshot.val() !== null ) {
          Object.keys(snapshot.val()).forEach(key => {
            if ( snapshot.val()[key].email === user.email ) {
              setUserName(snapshot.val()[key].userName);
            }
          })
        } 
      })

    return;
  }, [])

  return (
    <View style={styles.mainSettingsView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <SettingsHeader />

      <Text style={styles.freeAccountText}>
        Free Account
      </Text>

      <TouchableNativeFeedback>
        <View style={styles.goPremiumView}>
          <Text style={styles.goPremiumText}>
            go premium
          </Text>
        </View>
      </TouchableNativeFeedback>

      <View style={styles.userInfo}>
        <View style={styles.userInfoLeft}>
          <View style={styles.userImg}>
            <Text style={styles.userText}>
              h
            </Text>
          </View>
        </View>
        <View style={styles.userInfoRight}>
          <Text style={styles.userName}>
            {theUserName}
          </Text>
          <Text style={styles.viewProfile}>
            View Profile 
          </Text>
        </View>
      </View>

      <View style={styles.logoutView}>
        <Text style={styles.logoutViewTextMain}>
          Storage
        </Text>
        <Text style={styles.logoutViewSub}>
          Choose where to store your music data.
        </Text>
      </View>

      <TouchableNativeFeedback
        onPress={() => logout()}
      >
        <View style={styles.logoutView}>
          <Text style={styles.logoutViewTextMain}>
            Log out
          </Text>
          <Text style={styles.logoutViewSub}>
            You are logged in as Hajaja
          </Text>
        </View>
      </TouchableNativeFeedback>

    </View>
  )
}

const styles = StyleSheet.create({
  mainSettingsView: {
    flex: 1,
    backgroundColor: '#141414',
    height: screenHeight,
    width: screenWidth
  },
  freeAccountText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    marginTop: screenHeight > 640 ? 35 : 25,
    fontSize: 20
  },
  goPremiumView: {
    backgroundColor: '#fff',
    borderRadius: 300,
    padding: 12,
    paddingLeft: 42, 
    paddingRight: 42,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: screenHeight > 640 ? 30 : 25
  },
  goPremiumText: {
    color: '#000',
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: 'Product Sans Bold 700',
    letterSpacing: 1
  },
  userInfo: {
    width: '100%',
    // backgroundColor: 'red',
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    marginTop: screenHeight > 640 ? 35 : 25
  },
  userInfoLeft: {
    height: '100%',
    width: '30%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  userInfoRight:{
    height: '100%',
    width: '70%',
    // backgroundColor: 'blue',
    justifyContent: 'center'
  },
  userImg: {
    backgroundColor: '#a3502a',
    height:80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Product Sans Bold 700',
  },
  userName: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Product Sans Bold 700',
    textTransform: 'capitalize',
    marginBottom: 5
  },
  viewProfile: {
    color: '#ffffff99',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 12
  },
  logoutView: {
    width: '100%',
    padding: 20, 
  },
  logoutViewTextMain: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Product-Sans-Regular',
  },
  logoutViewSub: {
    color: '#ffffff99',
    fontSize: 13,
    fontFamily: 'Product-Sans-Regular',
    marginTop: 7
  }

})

export default SettingsScreen;