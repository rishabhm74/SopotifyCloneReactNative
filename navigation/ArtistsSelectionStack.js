import React, { useContext, useState } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MusicLikeCategory from '../screens/MusicLikeCategory';
import ArtistsSelectScreen from '../screens/ArtistsSelectScreen';



const ArtistsSelectionStackStack = createStackNavigator();


const ArtistsSelectionStack = ({ navigation }) => {


  return (
    <ArtistsSelectionStackStack.Navigator
      initialRouteName={"MusicLikeCategory" }
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <ArtistsSelectionStackStack.Screen 
        name="MusicLikeCategory"
        component={MusicLikeCategory}
        options={{header: () => null}}
      />
      <ArtistsSelectionStackStack.Screen 
        name="ArtistsSelectScreen"
        component={ArtistsSelectScreen}
        options={{header: () => null}}
      />
    </ArtistsSelectionStackStack.Navigator>
  )
}

export default ArtistsSelectionStack;