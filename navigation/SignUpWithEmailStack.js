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

import SignUpEmailScreen from '../screens/SignUpEmailScreen';
import CreatePasswordScreen from '../screens/CreatePasswordScreen';
import DateOfBirthScreen from '../screens/DateOfBirthScreen';
import UserGenderScreen from '../screens/UserGenderScreen';
import FinalUserNameScreen from '../screens/FinalUserNameScreen';



const SignUpWithEmailStackStack = createStackNavigator();


const SignUpWithEmailStack = ({navigation}) => {
  return (
    <SignUpWithEmailStackStack.Navigator 
      initialRouteName="SignUpEmail"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <SignUpWithEmailStackStack.Screen
        name="SignUpEmail"
        component={SignUpEmailScreen}
        options={{ 
          header: () => null
        }}
      />
      <SignUpWithEmailStackStack.Screen
        name="CreatePassword"
        component={CreatePasswordScreen}
        options={{ 
          header: () => null
        }}
      />
      {/* <SignUpWithEmailStackStack.Screen
        name="DateOfBirth"
        component={DateOfBirthScreen}
        options={{ 
          header: () => null
        }}
      /> */}
      <SignUpWithEmailStackStack.Screen
        name="UserGender"
        component={UserGenderScreen}
        options={{ 
          header: () => null
        }}
      />
      <SignUpWithEmailStackStack.Screen
        name="FinalUserName"
        component={FinalUserNameScreen}
        options={{ 
          header: () => null
        }}
      />
    </SignUpWithEmailStackStack.Navigator>
  )
}



export default SignUpWithEmailStack;