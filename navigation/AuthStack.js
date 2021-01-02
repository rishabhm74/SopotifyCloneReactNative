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

import LoginGreetScreen from '../screens/LoginGreetScreen';
// import SignUpWithEmailStack from './SignUpWithEmailStack';
import SignUpEmailScreen from '../screens/SignUpEmailScreen';
import CreatePasswordScreen from '../screens/CreatePasswordScreen';
import DateOfBirthScreen from '../screens/DateOfBirthScreen';
import UserGenderScreen from '../screens/UserGenderScreen';
import FinalUserNameScreen from '../screens/FinalUserNameScreen';
import LoginScreen from '../screens/LoginScreen';




const AuthStackStack = createStackNavigator();


const AuthStack = ({navigation}) => {
  return (
    <AuthStackStack.Navigator 
      initialRouteName="LoginGreet"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
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
      
    </AuthStackStack.Navigator>
  )
}



export default AuthStack;