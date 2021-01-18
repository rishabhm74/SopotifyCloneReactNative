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


const SuggestedArtistBlock = (props) => {
  return (
    <View style={styles.popularBlock}>
      <View style={styles.popularBlockAlbumArt}>
        <Image 
          source={props.suggestedArtistImgPath}
          style={styles.artistImg}
        />
      </View>
      <Text style={styles.suggestedArtistsName}>
        {props.suggestedArtistName}
      </Text>
    </View>    
  )
}

const styles = StyleSheet.create({
  popularBlock: {
    height: 190,
    width: 135,
    // backgroundColor: 'green',
    marginLeft: screenHeight > 640 ? 20 : 15,

  },
  popularBlockAlbumArt: {
    width: screenHeight > 640 ? 135 : 130,
    height: screenHeight > 640 ? 135 : 130,
    // backgroundColor: 'red',
    borderRadius: 300,
    overflow: 'hidden', 
    marginLeft: 'auto', 
    marginRight: 'auto' 
  },
  suggestedArtistsName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Product Sans Bold 700',
    marginTop: 12
  },
  artistImg: { 
    height: screenHeight > 640 ? '100%' : '100%', 
    width: screenHeight > 640 ? '100%' : '100%', 
    marginLeft: 'auto', 
    marginRight: 'auto' 
  }
})


export default SuggestedArtistBlock;