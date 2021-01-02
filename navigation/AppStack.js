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

import HomeScreen from '../screens/HomeScreen';



const AppStackStack = createStackNavigator();


const AppStack = ({navigation}) => {
  return (
    <AppStackStack.Navigator 
      initialRouteName="LoginGreet"
    >
      <AppStackStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{header: () => null}}
      />
    </AppStackStack.Navigator>
  )
}



export default AppStack;