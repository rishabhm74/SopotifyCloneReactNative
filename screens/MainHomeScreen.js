import React, { useContext, useEffect , useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableNativeFeedback,
  Dimensions,
  Alert,
  TextInput,
  ActivityIndicator
} from 'react-native';
import { AuthContext } from '../AuthProvider';
import database from '@react-native-firebase/database';
import { db } from '../src/config';


const userDbReference = database().ref('/users');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const MainHomeScreen = () => {
  const { user, logout } = useContext(AuthContext);
  // const [ loggedUserName, setLoggedUserName ] = useState('');

  // const readUserData = () => {
  //   userDbReference.on('value', function(snapshot) {
  //     let tempData = Object.values(snapshot.val());
  //     let tempData1 = tempData.filter(data => data.email == user.email);
  //     let tempData2 = tempData1[0]
  //     setLoggedUserName(tempData2.userName)
  //   })
  // }

  // useEffect(() => {
  //   readUserData();
  // }, [])



  return (
    <View style={styles.mainHomeScreenView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />

      <Text>
        ssdsd
      </Text>
      <Text>
        ssdsd
      </Text>

      <Button
        title="logout"
        onPress={() => logout()}
      />

    </View>
    
  )
}

const styles = StyleSheet.create({
  mainHomeScreenView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#141414'
  }
})

export default MainHomeScreen;