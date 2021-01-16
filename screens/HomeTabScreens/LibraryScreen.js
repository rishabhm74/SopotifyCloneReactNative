import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const LibraryScreen = () => {
  return (
    <View style={styles.mainLibraryView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <Text style={{ color: '#fff' }}>
        Library
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainLibraryView: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LibraryScreen;