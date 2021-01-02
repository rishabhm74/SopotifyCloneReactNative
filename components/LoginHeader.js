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
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LoginHeader = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.authStackHeader}>
      <TouchableNativeFeedback
        onPress={() => navigation.goBack()}
      >
        <View
          style={styles.authStackHeaderBackButtonTouchable}
        >
          <Image 
            source={require('../assets/icons/leftArrow.png')} 
            style={styles.authStackHeaderBackButton}
          />
        </View>
      </TouchableNativeFeedback>
      <View style={styles.authStackHeaderTitleView}>
        <Text style={styles.authStackHeaderTitleText}>
          
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  authStackHeader: {
    height: screenHeight > 640 ? 60 : 55,
    width: screenWidth,
    backgroundColor: '#141414',
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authStackHeaderBackButton: {
    height: 20,
    width: 20,
    opacity: 0.6
  },
  authStackHeaderBackButtonTouchable: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  authStackHeaderTitleView: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  authStackHeaderTitleText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 16,
    marginLeft: "-15%"
  }
})

export default LoginHeader;