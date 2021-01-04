import React, { useContext, useState } from 'react';
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
  ActivityIndicator,
  Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const ArtistsSelectScreen = () => {

  return (
    <View style={styles.mainArtistsSelectScreenView}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#14141499"
        translucent={true}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainArtistsSelectScreenView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#141414'
  }
})

export default  ArtistsSelectScreen;