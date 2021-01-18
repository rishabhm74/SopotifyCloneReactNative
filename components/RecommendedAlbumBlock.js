import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const RecommendedAlbumBlock = (props) => {
  return (
    <View style={styles.recommendedAlbumMainView} >
      <View style={styles.recommendedAlbumImgContainer}>
        <View style={styles.recommendedAlbumImgContainerIconContainer}>
          <Image 
            source={require('../assets/icons/spotify.png')}
            style={styles.recommendedAlbumImgContainerIcon}
          />
        </View>
        <Image 
          source={props.albumArt}
          style={styles.recommendedAlbumImg}
        />
      </View>
      <Text style={styles.recommendedAlbumTitle}>
        {props.albumTitle}
      </Text>
      <Text 
        style={styles.recommendedAlbumArtistsName}
        numberOfLines={1}
      >
        {props.albumArtists}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  recommendedAlbumMainView: {
    width: screenHeight > 640 ? 160 : 140,
    height: screenHeight > 640 ? 223 : 205,
    // backgroundColor: 'red',
    marginLeft: screenHeight > 640 ? 18 : 15,
  },
  recommendedAlbumImgContainer: {
    height: screenHeight > 640 ? 160 : 140,
    width: screenHeight > 640 ? 160 : 140,
    // backgroundColor: 'green',
    overflow: 'hidden',
    borderRadius: screenHeight > 640 ? 10 : 7
  },
  recommendedAlbumImgContainerIconContainer: {
    width: '100%',
    padding: 7,
    position: 'absolute',
    zIndex: 2
  },
  recommendedAlbumImgContainerIcon: {
    height: 15,
    width: 15,
    opacity: 0.9
  },
  recommendedAlbumImg: {
    height: '100%',
    width: '100%'
  },
  recommendedAlbumTitle: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 14,
    textAlign:'center',
    marginTop: 13
  },
  recommendedAlbumArtistsName: {
    color: '#ffffff99',
    fontSize: 13,
    fontFamily: 'Product-Sans-Regular',
    textAlign: 'center',
    flex: 1,
    marginTop: 7

  }
})


export default RecommendedAlbumBlock;