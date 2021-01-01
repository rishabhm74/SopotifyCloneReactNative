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
import DatePicker from 'react-native-date-picker';

import AuthStackHeader from '../components/AuthStackHeader';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DateOfBirthScreen = () => {
  const [date, setDate] = useState(new Date());

  const navigation = useNavigation();

  return (
    <View style={styles.signUpScreenView}>
      <AuthStackHeader />
      <View style={styles.dobScrollContainer}>
        <DatePicker 
          date={date}
          onDateChange={setDate}
          androidVariant={'nativeAndroid'}
          mode={'date'}
          // textColor="#fff"
          // fadeToColor="#fff"
          style={{ backgroundColor: 'red' }}
        />
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
  dobScrollContainer: {
    width: screenWidth,
    height: 280,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
})


export default DateOfBirthScreen;