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

import MainHomeScreen from '../screens/MainHomeScreen';



const AppStackStack = createStackNavigator();


const AppStack = ({navigation}) => {
  return (
    <AppStackStack.Navigator 
      initialRouteName="LoginGreet"
    >
      <AppStackStack.Screen
        name="MainHomeScreen"
        component={MainHomeScreen}
        options={{header: () => null}}
      />
    </AppStackStack.Navigator>
  )
}



export default AppStack;