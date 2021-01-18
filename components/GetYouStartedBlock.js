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



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


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
          <View style={styles.albumArtContainerMainTitleView}>
            <Text 
              style={styles.albumArtContainerMainTitle}
              numberOfLines={1}
            >
              {props.albumMainTitle}
            </Text>
          </View>
          <Text style={styles.albumArtContainerSubTitle}>
            {props.albumSubTitle}
          </Text>
        </View>
        <View style={styles.albumArtContainerView}>
          <View style={styles.albumArtStart}>
            <Image 
              source={props.albumArtStartImg}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.albumArtMiddle}>
            <Image 
              source={props.albumArtMiddleImg}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View  style={styles.albumArtEnd}>
            <Image 
              source={props.albumArtEndImg}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </View>
      </LinearGradient>
      <Text 
        style={styles.albumArtContainerArtistsText}
        numberOfLines={2}
      >
        {props.artistsName}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  startedAlbumBlock: {
    height: screenHeight > 640 ? 220 : 200 ,
    width: screenHeight > 640 ? 165 : 150,
    // backgroundColor: 'green',
    marginLeft: screenHeight > 640 ? 18 : 15,
    marginRight: screenHeight > 640 ? 0 : 0,
  },
  albumArtContainer: {
    width: '100%',
    height: screenHeight > 640 ? 168 : 150,
    // backgroundColor: '#49A5D8'
  },
  albumArtContainerIconContainer: {
    width: '100%',
    padding: screenHeight > 640 ? 7 : 5,
  },  
  albumArtContainerIconContainerIcon: {
    height: 15,
    width: 15,
    opacity: 0.5
  },
  albumArtContainerTitleContainer: {
    alignItems: 'center'
  },
  albumArtContainerMainTitleView: {
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight > 640 ? 22 : 17
  },
  albumArtContainerMainTitle: {
    textAlign: 'center',
    fontFamily: 'Product Sans Bold 700',
    color: '#fff',
    fontSize: screenHeight > 640 ? 15 : 14,
    textTransform: 'capitalize',
    marginBottom: screenHeight > 640 ? 2.5 : 0,
    width: '80%',
    height: 15,
    // marginLeft: 'auto',
    // backgroundColor: 'green',
    flex: 1,
    // marginRight: 'auto',
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
    paddingTop: 15,
    flex: 1
  },

})


export default GetYouStartedBlock;

