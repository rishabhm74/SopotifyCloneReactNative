import React, { useState, useContext } from 'react';
import { 
  View, 
  StatusBar,
  Image,
  Text
} from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { AuthContext } from '../AuthProvider';
import database from '@react-native-firebase/database';
import UpdatedStack from './UpdatedStack';
import NotUpdatedStack from './NotUpdatedStack';



const userDbReference = database().ref('/users');
const MainAppStackStack = createStackNavigator();



const MainAppStack = () => {
  const { user, logout } = useContext(AuthContext);

  const [ isUpdated, setIsUpdated ] = useState(() => {
    var userId = null;
    userDbReference.once('value')
    .then(snaapshot => {
      const userData = snaapshot.val();
      if (userData !== null) {
        Object.keys(userData).forEach(key => {
          if (userData[key].email === user.email) {
            console.log("Our guy: ", key);
            userId = key;
            let ourGuy = userData[key];
            if ( ourGuy ) {
              console.log(ourGuy);
              if (ourGuy.artists == undefined && ourGuy.musicCategory == undefined)  {
                console.log("in notUpdatedStack");
                setIsUpdated(false);
                return false;
              } else {
                console.log("in updatedStack");
                setIsUpdated(true);
                return true;
              }
            } else {
              console.log("in updatedStack");
              setIsUpdated(true);
              return true;
            }
          } 
        })
      } 
    })
  });


  if (isUpdated === true) {
    return (
      <View style={{ flex: 1, backgroundColor: '#141414'  }} >
        <StatusBar 
          translucent={true}
          backgroundColor="#141414"
          barStyle="light-content"
        />
        <UpdatedStack />
      </View>
    )
  } else if (isUpdated === false) {
    return (
      <View style={{ flex: 1, backgroundColor: '#141414' }} >
        <StatusBar 
          translucent={true}
          backgroundColor="#141414"
          barStyle="light-content"
        />
        <NotUpdatedStack />
      </View>
    )
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: '#141414', justifyContent: 'center', alignItems: 'center'  }} >
        <StatusBar 
          translucent={true}
          backgroundColor="#141414"
          barStyle="light-content"
        />
        <Image 
          source={require('../assets/images/splashLogo.png')}
          style={{ height: 170, width: 170 }}
        />
      </View>
    )
  }
  
}

export default MainAppStack;
