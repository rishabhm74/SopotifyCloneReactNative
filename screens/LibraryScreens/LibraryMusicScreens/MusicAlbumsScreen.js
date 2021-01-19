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

const MusicAlbumsScreen = () => {
  return (
    <View style={styles.mainPlaylistScreenView}>
      <Text style={styles.albumTextMain}>
        Your albums will appear here
      </Text>
    </View>
      
  )
}

const styles = StyleSheet.create({
  mainPlaylistScreenView: { 
    flex: 1, 
    backgroundColor: '#141414', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  albumTextMain: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 22,
    marginBottom: 50
  }
})

export default MusicAlbumsScreen;