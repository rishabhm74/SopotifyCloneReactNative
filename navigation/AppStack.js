import React, { useContext, useState } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainHomeScreen from '../screens/MainHomeScreen';
import MusicLikeCategory from '../screens/MusicLikeCategory';
import ArtistsSelectScreen from '../screens/ArtistsSelectScreen';
import { AuthContext } from '../AuthProvider';
import database from '@react-native-firebase/database';
import { db } from '../src/config';


 

const userDbReference = database().ref('/users');
const AppStackStack = createStackNavigator();


const AppStack = ({navigation}) => {
  const { user } = useContext(AuthContext);
  const [ isUpdated, setIsUpdated ] = useState(false)


  // const setIsUpdatedHandler = () => {
  //   // console.log("Data to send: ");
  //   // console.log(musicCategoryList);
  //   // console.log(artistList, '\n\n\n');
  //   let found;
  //   let userKey;
  //   userDbReference.on('value', function(snapshot) {
  //     const userData = snapshot.val();
  //     if ( userData !== null ) {
  //       Object.keys(userData).forEach(key => {
  //         let tempUserData = userData[key];
  //         console.log(tempUserData);
  //         if (tempUserData.artists && tempUserData.musicCategory) {
  //           setIsUpdated(true)
  //         }
  //       })
  //     }
  //   })

  // }

  // useContext(() => {
  //   setIsUpdatedHandler();
  // })


  return (

    <AppStackStack.Navigator 
      initialRouteName={"MainHomeScreen" }
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
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
