import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  ScrollView,
  Image
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const LocalMusicScreen = () => {

 

  // const playSound = () => {

  // }

  // const stopSound = () => {
  //   sound.stop();
  // }


  return (
    <View style={styles.mainLocalMusicView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      {/* <Button 
        title="play"
        onPress={() => PlaySound('avicii_sound')}
      /> */}
      {/* <Button 
        title="stop"
        onPress={() => stopSound()}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  mainLocalMusicView: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center'
  },

})

export default LocalMusicScreen;