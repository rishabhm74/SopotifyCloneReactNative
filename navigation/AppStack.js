import React, { useContext, useState } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainHomeScreen from '../screens/MainHomeScreen';
import MusicLikeCategory from '../screens/MusicLikeCategory';
import ArtistsSelectScreen from '../screens/ArtistsSelectScreen';


 
const AppStackStack = createStackNavigator();


const AppStack = ({navigation}) => {
  return (

    <AppStackStack.Navigator 
      initialRouteName={"MusicLikeCategory" }
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <AppStackStack.Screen 
        name="MusicLikeCategory"
        component={MusicLikeCategory}
        options={{header: () => null}}
      />
      <AppStackStack.Screen 
        name="ArtistsSelectScreen"
        component={ArtistsSelectScreen}
        options={{header: () => null}}
      />
      <AppStackStack.Screen
        name="MainHomeScreen"
        component={MainHomeScreen}
        options={{header: () => null}}
      />
    </AppStackStack.Navigator>
  )
}



export default AppStack;
