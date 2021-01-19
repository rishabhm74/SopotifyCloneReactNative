import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  Image,
  TouchableNativeFeedback
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const PodcastsDownloadsScreen = () => {
  return (
    <View style={styles.mainPlaylistScreenView}>
      <View style={styles.playlistInfoContainer}>
        <Text style={styles.playlistInfoText}>
          No downloads yet
        </Text>
        <Text style={styles.playlistInfoSubText}>
          Tap  <Image 
            source={require('../../../assets/icons/download.png')}
            style={styles.downloadImg}
          />  on an episode tolisten without a connection.
        </Text>
        <TouchableNativeFeedback>
          <View style={styles.createPlaylistView}>
            <Text style={styles.createPlaylistText}>
              browse podcasts
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
    marginBottom: 11,
    lineHeight: 40
  },
  playlistInfoSubText: {
    color: '#9e9e9e',
    textAlign: 'center',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 14,
    marginBottom: 50,
    lineHeight: 22
  },
  downloadImg: {
    height: 14,
    width: 14,
    opacity: 0.3,
    marginLeft: 5,
    marginRight: 5
  },
  createPlaylistView: {
    borderRadius: 300,
    backgroundColor: '#fff',
    padding: 16.5,
    paddingLeft: 50,
    paddingRight: 50,
  },
  createPlaylistText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 15,
    textTransform: 'uppercase',
    letterSpacing: 2
  }
})

export default PodcastsDownloadsScreen;