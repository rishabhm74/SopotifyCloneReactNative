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


const TrendingBlock = (props) => {
  return (
    <View style={styles.trendingBlock}>
      <View style={styles.trendingBlockImgContainer}>
        <View style={styles.trendingBlockImgContainerMain}>
          <Image
            source={props.trendingImg}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View style={{ position: 'absolute', padding: 7, zIndex: 2 }}>
          <Image 
            source={require('../assets/icons/spotify.png')}
            style={{ height: 17, width: 17, opacity: 0.5 }}
          />
        </View>
      </View>
      <View style={styles.trendingBlockArtistsNamesContainer}>
        <Text 
          style={styles.trendingBlockArtistsNames}
          numberOfLines={2}
        >
          {/* Diljit Doshanjh, Guru Randhawa, B Parak, Arijit Singh */}
          {props.trendingArtitsNames}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  trendingBlock: {
    width: screenHeight > 640 ? 160 : 140,
    height: screenHeight > 640 ? 223 : 205,
    // backgroundColor: 'green',
    marginLeft: screenHeight > 640 ? 18 : 15,
  },
  trendingBlockImgContainer: {
    width: screenHeight > 640 ? 160 : 140,
    height: screenHeight > 640 ? 160 : 140,
    backgroundColor: 'blue'
  },
  trendingBlockArtistsNamesContainer: {
    width: '100%'
  },
  trendingBlockArtistsNames: {
    color: '#ffffff99',
    fontSize: 13,
    fontFamily: 'Product-Sans-Regular',
    marginTop: 18
  }
  
})

export default TrendingBlock;