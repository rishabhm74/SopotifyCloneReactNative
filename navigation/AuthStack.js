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
  Button
} from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import LoginGreetScreen from '../screens/AuthStackScreens/LoginGreetScreen';
// import SignUpWithEmailStack from './SignUpWithEmailStack';
import SignUpEmailScreen from '../screens/AuthStackScreens/SignUpEmailScreen';
import CreatePasswordScreen from '../screens/AuthStackScreens/CreatePasswordScreen';
// import DateOfBirthScreen from '../screens/DateOfBirthScreen';
import UserGenderScreen from '../screens/AuthStackScreens/UserGenderScreen';
import FinalUserNameScreen from '../screens/AuthStackScreens/FinalUserNameScreen';
import LoginScreen from '../screens/AuthStackScreens/LoginScreen';
import PhoneAuthScreen from '../screens/AuthStackScreens/PhoneAuthScreen';

import MainHomeScreen from '../screens/MainHomeScreen';



const AuthStackStack = createStackNavigator();


const AuthStack = ({navigation}) => {
  return (
    <AuthStackStack.Navigator 
      initialRouteName="LoginGreet"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
     {/* <AuthStackStack.Navigator 
    //   initialRouteName="MainHomeScreen"
    //   screenOptions={{
    //     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    //   }}
    // > */}
      <AuthStackStack.Screen
        name="LoginGreet"
        component={LoginGreetScreen}
        options={{header: () => null}}
      />
      <AuthStackStack.Screen
        name="SignUpEmail"
        component={SignUpEmailScreen}
        options={{ 
          header: () => null
        }}
      />
      <AuthStackStack.Screen
        name="CreatePassword"
        component={CreatePasswordScreen}
        options={{ 
          header: () => null
        }}
      />
      {/* <AuthStackStack.Screen
        name="DateOfBirth"
        component={DateOfBirthScreen}
        options={{ 
          header: () => null
        }}
      /> */}
      <AuthStackStack.Screen
        name="UserGender"
        component={UserGenderScreen}
        options={{ 
          header: () => null
        }}
      />
      <AuthStackStack.Screen
        name="FinalUserName"
        component={FinalUserNameScreen}
        options={{ 
          header: () => null
        }}
      />
      <AuthStackStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ 
          header: () => null
        }}
      />
      <AuthStackStack.Screen
        name="PhoneAuth"
        component={PhoneAuthScreen}
        options={{ 
          header: () => null
        }}
      />
      {/* <AuthStackStack.Screen
        name="MainHomeScreen"
        component={MainHomeScreen}
        options={{ 
          header: () => null
        }}
      /> */}
      
      
    </AuthStackStack.Navigator>
  )
}



export default AuthStack;