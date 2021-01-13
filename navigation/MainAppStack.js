import React, { useState, useContext, useEffect } from 'react';
import { 
  View, 
  StatusBar,
  Image,
  Text,
  Button
} from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { AuthContext } from '../AuthProvider';
import UpdatedStack from './UpdatedStack';
import NotUpdatedStack from './NotUpdatedStack';
import LoadingScreen from '../screens/LoadingScreen';
import database from '@react-native-firebase/database';




const userDbReference = database().ref('/users');
const MainAppStackStack = createStackNavigator();

const MainAppStack = () => {
  const { user, logout } = useContext(AuthContext);
  const [ isUpdated, setIsUpdated ] = useState(null)


  useEffect(() => {
    setTimeout(() => {
      userDbReference.once('value')
      .then(snapshot => {
        if ( snapshot.val() !== null ) {
          Object.keys(snapshot.val()).forEach(key => {
            if ( snapshot.val()[key].email === user.email ) {
              if ( snapshot.val()[key].artists === undefined && snapshot.val()[key].musicCategory === undefined ) {
                setIsUpdated(false)
              } else {
                setIsUpdated(true)
              }
            }
          })
        } 
      })
    }, 3000)
  }, []) 



    if (isUpdated === true) {
      return <UpdatedStack />
    } 
    
    if (isUpdated === false) {
      return <NotUpdatedStack />
    } 

    return <LoadingScreen />   
    
    // return <UpdatedStack />



}

export default MainAppStack;





































// const forUpdated = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#141414'  }} >
//       <StatusBar 
//         translucent={true}
//         backgroundColor="#141414"
//         barStyle="light-content"
//       />
//       <UpdatedStack />
//     </View>
//   )
// }

// const forNotUpdated = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#141414' }} >
//       <StatusBar 
//         translucent={true}
//         backgroundColor="#141414"
//         barStyle="light-content"
//       />
//       <NotUpdatedStack />
//     </View>
//   )
// }

// const defaultReturn = () => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#141414', justifyContent: 'center', alignItems: 'center'  }} >
//       <StatusBar 
//         translucent={true}
//         backgroundColor="#141414"
//         barStyle="light-content"
//       />
//       <Image 
//         source={require('../assets/images/splashLogo.png')}
//         style={{ height: 170, width: 170 }}
//       />
//     </View>
//   )
// }


  // var userId ;
  // const [ returnView, setReturnView ] = useState(defaultReturn())
  // const [ isUpdated, setIsUpdated ] = useState(() => {
  //   console.log("in")
  //   userDbReference.once('value')
  //   .then(snapshot => {
  //     if ( snapshot.val() !== null ) {
  //       console.log("in val")
  //       Object.keys(snapshot.val()).forEach(key => {
  //         // console.log(key)
  //         // console.log(snapshot.val()[key].email)
  //         if (snapshot.val()[key].email === user.email) {
  //           // const userId = key;
  //           // database()
  //           // .ref(`/users/${key}`)
  //           // .once('value')
  //           // .then(() => {
  //           //   console.log("okay")
  //           // })
  //           console.log(key)
  //         }
  //       })
  //     } 
  //     // console.log("true")
  //     // setReturnView(forNotUpdated());
  //     // return true;
  //     // else {
  //     //   console.log("false")
  //     //   setReturnView(forUpdated())
  //     //   return false;
  //     // }
  //   })
  // })

  // useEffect(() => {
  //   if ( isUpdated === false ) {
  //     setReturnView(forNotUpdated())
  //   } else if ( isUpdated === true ) {
  //     setReturnView(forUpdated())
  //   }
  //   return () => console.log("return")
  // }, [])


  // return (
  //   <>
  //     {returnView}
  //   </>
  // )


  // if (isUpdated === true) {
  //   return (
  //     <View style={{ flex: 1, backgroundColor: '#141414'  }} >
  //       <StatusBar 
  //         translucent={true}
  //         backgroundColor="#141414"
  //         barStyle="light-content"
  //       />
  //       <UpdatedStack />
  //     </View>
  //   )
  // } 

  // if (isUpdated === false) {
  //   return (
  //     <View style={{ flex: 1, backgroundColor: '#141414' }} >
  //       <StatusBar 
  //         translucent={true}
  //         backgroundColor="#141414"
  //         barStyle="light-content"
  //       />
  //       <NotUpdatedStack />
  //     </View>
  //   )
  // } 

  // return (
  //   <View style={{ flex: 1, backgroundColor: '#141414', justifyContent: 'center', alignItems: 'center'  }} >
  //     <StatusBar 
  //       translucent={true}
  //       backgroundColor="#141414"
  //       barStyle="light-content"
  //     />
  //     <Image 
  //       source={require('../assets/images/splashLogo.png')}
  //       style={{ height: 170, width: 170 }}
  //     />
  //   </View>
  // )

  


