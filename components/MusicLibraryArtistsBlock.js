import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  Image
} from 'react-native';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const MusicLibraryArtistsBlock = (props) => {
  return (
    <View style={styles.artistBlock}>
      <View style={styles.artistImgContainer}>
        <Image 
          style={styles.artistImg}
          source={props.artistImgUrl}
        />
      </View>
      <View style={styles.artistNameContainer}> 
        <Text style={styles.artistNameText}>
          {props.artistName}
        </Text>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  artistBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'red',
    height: 110,
    // marginTop: 10
  },
  artistImgContainer: {
    width: '30%',
    height: '100%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  artistImg: {
    width: 90,
    height: 90,
    borderRadius: 300,

  },
  artistNameContainer: {
    width: '70%',
    height: '100%',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    paddingLeft: 15
  },
  artistNameText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 18
  }
})

export default MusicLibraryArtistsBlock;