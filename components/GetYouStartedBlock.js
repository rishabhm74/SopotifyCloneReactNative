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
import LinearGradient from 'react-native-linear-gradient';



const GetYouStartedBlock = (props) => {
  return (
    <View style={styles.startedAlbumBlock}>
      <LinearGradient 
        style={styles.albumArtContainer}
        colors={[ props.colorStart, props.colorMiddle, props.colorEnd ]}
        start={{ x: 0, y: 0 }}
        end={{ x:1, y: 1 }}
      >
        <View style={styles.albumArtContainerIconContainer}>
          <Image 
            source={require('../assets/icons/spotify.png')}
            style={styles.albumArtContainerIconContainerIcon}
          />
        </View>
        <View style={styles.albumArtContainerTitleContainer}>
          <Text style={styles.albumArtContainerMainTitle}>
            {props.albumMainTitle}
          </Text>
          <Text style={styles.albumArtContainerSubTitle}>
            {props.albumSubTitle}
          </Text>
        </View>
        <View style={styles.albumArtContainerView}>
          <View style={styles.albumArtStart} />
          <View style={styles.albumArtMiddle}  />
          <View  style={styles.albumArtEnd} />
        </View>
      </LinearGradient>
      <Text style={styles.albumArtContainerArtistsText}>
        {props.artistsName}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  startedAlbumBlock: {
    height: 220,
    width: 165,
    // backgroundColor: 'green',
    marginLeft: 18,
    marginRight: 5
  },
  albumArtContainer: {
    width: '100%',
    height: 168,
    // backgroundColor: '#49A5D8'
  },
  albumArtContainerIconContainer: {
    width: '100%',
    padding: 7
  },  
  albumArtContainerIconContainerIcon: {
    height: 15,
    width: 15,
    opacity: 0.5
  },
  albumArtContainerMainTitle: {
    textAlign: 'center',
    fontFamily: 'Product Sans Bold 700',
    color: '#fff',
    fontSize: 15,
    textTransform: 'capitalize',
    marginBottom: 2.5
  },  
  albumArtContainerSubTitle: {
    textAlign: 'center',
    fontFamily: 'Product Sans Bold 700',
    color: '#fff',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  albumArtContainerView: {
    width: '100%',
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  albumArtStart: {
    height: 60,
    width: 50,
    backgroundColor: '#fff',
    opacity: 0.5
  },
  albumArtEnd: {
    height: 60,
    width: 50,
    backgroundColor: '#fff',
    opacity: 0.5
  },
  albumArtMiddle: {
    height: 80,
    width: 80,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#fff'
  },
  albumArtContainerArtistsText: {
    color: '#b3b3b3',
    fontSize: 13,
    fontFamily: 'Product-Sans-Regular',
    paddingTop: 15
  },

})


export default GetYouStartedBlock;