import React, { useContext, useState, useEffect } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainHomeScreen from '../screens/MainHomeScreen';
import MusicLikeCategory from '../screens/MusicLikeCategory';
import ArtistsSelectScreen from '../screens/ArtistsSelectScreen';
import { AuthContext } from '../AuthProvider';
import database from '@react-native-firebase/database';

 



const userDbReference = database().ref('/users');
const AppStackStack = createStackNavigator();


const AppStack = () => {
  // const [ isUpdated, setIsUpdated ] = useState(false);
  // const { user, logout } = useContext(AuthContext);

  // useEffect(() => {
  //   console.log("use effect ran");
  //   if ( letIsUpdated ) {
  //     console.log("its true");
  //   } else {
  //     console.log("its false");
  //     var userId = null;
  //     userDbReference.once('value')
  //     .then(snapshot => {
  //       const userData = snapshot.val();
  //       if ( userData !== null ) {
  //         Object.keys(userData).forEach(key => {
  //           if ( userData[key].email === user.email ) {
  //             console.log("User: ", key);
  //             // setIsUpdated(true);
  //             letIsUpdated = true;
  //           }
  //         })
  //       }
  //     })
  //   }

  //   return () => console.log("unmounting...")
  // }, [  ])


  return (

    <AppStackStack.Navigator 
      // initialRouteName= { letIsUpdated ? 'MainHomeScreen' : 'MusicLikeCategory'  }
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
