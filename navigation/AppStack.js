import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainHomeScreen from '../screens/MainHomeScreen';
import MusicLikeCategory from '../screens/MusicLikeCategory';
import ArtistsSelectScreen from '../screens/ArtistsSelectScreen';


 
const AppStackStack = createStackNavigator();


const AppStack = () => {
  const [ isUpdated, setIsUpdated ] = useState(false);



  return (

    <AppStackStack.Navigator 
      initialRouteName= { isUpdated ? 'MainHomeScreen' : 'MusicLikeCategory'  }
      // initialRouteName={"MusicLikeCategory" }
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
