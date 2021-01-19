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
        <View style={{ position: 'absolute', padding: screenHeight > 640 ? 7 : 5, zIndex: 3 }}>
          <Image 
            source={require('../assets/icons/spotify.png')}
            style={{ height: 15, width: 15, opacity: 0.5 }}
          />
        </View>
        <LinearGradient
          style={{ height: '100%', width: '100%', position: 'absolute', zIndex: 2, justifyContent: 'center', alignItems: 'center' }}
          colors={props.trendingGrad}
        >
          <Text style={styles.blockMainText}>
            {props.mainText}
          </Text>
          <Text style={{ 
            fontFamily: 'Product Sans Bold 700',
            fontSize: 17,
            color: props.subTextColor
           }}>
            {props.subText}
          </Text>
        </LinearGradient>
      </View>
      <View style={styles.trendingBlockArtistsNamesContainer}>
        <Text 
          style={styles.trendingBlockArtistsNames}
          numberOfLines={2}
        >
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
  },
  blockMainText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 22
  },
  blockSubText: {
    // color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 18
  }
  
})

export default TrendingBlock;