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
import { createStackNavigator } from '@react-navigation/stack';

import LoginGreetScreen from '../screens/LoginGreetScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStackStack = createStackNavigator();


const AuthStack = ({navigation}) => {
  return (
    <AuthStackStack.Navigator 
      initialRouteName="LoginGreet"
    >
      <AuthStackStack.Screen
        name="LoginGreet"
        component={LoginGreetScreen}
        options={{header: () => null}}
      />
      <AuthStackStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ 
          header: () => null
        }}
      />
    </AuthStackStack.Navigator>
  )
}



export default AuthStack;