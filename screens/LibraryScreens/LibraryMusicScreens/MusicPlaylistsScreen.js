import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MusicPlaylistsScreen = () => {
  return (
    <View style={styles.mainPlaylistScreenView}>
      <View style={styles.playlistInfoContainer}>
        <Text style={styles.playlistInfoText}>
          Create your first playlist
        </Text>
        <Text style={styles.playlistInfoSubText}>
          It's easy, we'll help you.
        </Text>
        <TouchableNativeFeedback>
          <View style={styles.createPlaylistView}>
            <Text style={styles.createPlaylistText}>
              CREATE PLAYLIST
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
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
  playlistInfoContainer: {
    // width: 300,
    // height: 400,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35
  },
  playlistInfoText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 25,
    marginBottom: 11
  },
  playlistInfoSubText: {
    color: '#9e9e9e',
    textAlign: 'center',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 14,
    marginBottom: screenHeight > 640 ?  50 : 45
  },
  createPlaylistView: {
    borderRadius: 300,
    backgroundColor: '#fff',
    padding: screenHeight > 640 ?  16.5 : 14,
    paddingLeft: screenHeight > 640 ? 50 : 45,
    paddingRight: screenHeight > 640 ? 50 : 45,
  },
  createPlaylistText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Product Sans Bold 700',
    fontSize: screenHeight > 640 ? 15: 14,
    textTransform: 'uppercase',
    letterSpacing: 2
  }
})

export default MusicPlaylistsScreen;