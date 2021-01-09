import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainHomeScreen from '../screens/MainHomeScreen';
import ArtistsSelectScreen from '../screens/ArtistsSelectScreen';
import MusicLikeCategory from '../screens/MusicLikeCategory';



 
const NotUpdatedStackStack = createStackNavigator();


const NotUpdatedStack = () => {

  return (
    <NotUpdatedStackStack.Navigator 
      initialRouteName={"MusicLikeCategory"}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <NotUpdatedStackStack.Screen
        name="MusicLikeCategory"
        component={MusicLikeCategory}
        options={{header: () => null}}
      />
      <NotUpdatedStackStack.Screen
        name="ArtistsSelectScreen"
        component={ArtistsSelectScreen}
        options={{header: () => null}}
      />
      <NotUpdatedStackStack.Screen
        name="MainHomeScreen"
        component={MainHomeScreen}
        options={{header: () => null}}
      />
    </NotUpdatedStackStack.Navigator>
  )
}



export default NotUpdatedStack;
