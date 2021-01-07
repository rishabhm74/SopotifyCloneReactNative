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
  TextInput,
  TouchableOpacity
} from 'react-native';

import AuthStackHeader from '../../components/AuthStackHeader';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const UserGenderScreen = ({ route }) => {
  const [genderSelected, setGenderSelected] = useState(false);
  const [selectedGenderType, setSelectedGenderType] = useState('');

  const { userEmail, userPassword } = route.params;

  const navigation = useNavigation();

  const selectedGenderTypeHandler = (type) => {
    if (!genderSelected) {
      // if ( selectedGenderType !== type ) {
      //   setGenderSelected(!genderSelected);
      //   setSelectedGenderType(type);
      // }
      if ( type === 'female' ) {
        setGenderSelected(!genderSelected);
        setSelectedGenderType('female');
        return navigation.navigate('FinalUserName', {
          userEmail: userEmail,
          userPassword: userPassword,
          userGender: 'female'
        });
      } else if ( type === 'male' ) {
        setGenderSelected(!genderSelected);
        setSelectedGenderType('male');
        return navigation.navigate('FinalUserName', {
          userEmail: userEmail,
          userPassword: userPassword,
          userGender: 'male'
        });
      } else if ( type === 'non-binary' ) {
        setGenderSelected(!genderSelected);
        setSelectedGenderType('non-binary');
        return navigation.navigate('FinalUserName', {
          userEmail: userEmail,
          userPassword: userPassword,
          userGender: 'non-binary'
        });
      }
    } 
    
  }

  return (
    <View style={styles.genderScreenView}>
      <AuthStackHeader />
      <View style={styles.signUpScreen}>
        <Text style={styles.whatsYourEmailText}>
          What's your gender?
        </Text>
        <View style={styles.genderOptionsContainer}>
          <TouchableOpacity
            onPress={() => selectedGenderTypeHandler('female')}
          >
            <View style={ genderSelected && selectedGenderType === "female"  ? styles.genderTypeViewSelected : styles.genderTypeViewNotSelected}>
              <Text style={styles.genderTypeText}>
                Female
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectedGenderTypeHandler('male')}
          >
            <View style={ genderSelected && selectedGenderType === "male"  ? styles.genderTypeViewSelected : styles.genderTypeViewNotSelected}>
              <Text style={styles.genderTypeText}>
                Male
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectedGenderTypeHandler('non-binary')}
          >
            <View style={ genderSelected && selectedGenderType === "non-binary" ? styles.genderTypeViewSelected : styles.genderTypeViewNotSelected}>
              <Text style={styles.genderTypeText}>
                Non-binary
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  genderScreenView: {
    flex: 1,
    width: screenWidth,
    backgroundColor: '#141414'
  }, 
  signUpScreen: {
    width: screenWidth,
    height: screenHeight > 640 ? 165 : 140,
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
    marginBottom: screenHeight > 640 ? 27 : 25
  },
  genderOptionsContainer: {
    width: '100%',
    height: 'auto',
    // backgroundColor: 'red',
    flexDirection: 'row'
  },
  genderTypeViewNotSelected: {
    height: 'auto',
    width: 'auto',
    borderWidth: 1.5,
    borderColor: '#ffffff40',
    padding: screenHeight > 640 ? 15 : 13,
    paddingTop: screenHeight > 640 ? 9 : 7,
    paddingBottom: screenHeight > 640 ? 9 : 7,
    borderRadius: 50,
    marginRight: 10
  },
  genderTypeText: {
    fontFamily: 'Product Sans Bold 700',
    color: '#fff',
    fontSize: 15
  },
  genderTypeViewSelected: {
    height: 'auto',
    width: 'auto',
    borderWidth: 1.5,
    borderColor: '#ffffff',
    padding: screenHeight > 640 ? 15 : 13,
    paddingTop: screenHeight > 640 ? 9 : 7,
    paddingBottom: screenHeight > 640 ? 9 : 7,
    borderRadius: 50,
    marginRight: 10
  },
})


export default UserGenderScreen;