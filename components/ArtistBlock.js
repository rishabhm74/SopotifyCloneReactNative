import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableNativeFeedback,
  Dimensions,
  Alert,
  TextInput,
  ActivityIndicator,
  Keyboard
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const ArtistBlock = (props) => {
  const [ clickState, setClickState ] = useState(false);

  const tickStateHandler = () => {
    clickState ? setClickState(false) : setClickState(true);
  };



  return (
    <TouchableNativeFeedback
      onPress={props.onPress}
      onPressIn={() => tickStateHandler()}
    >
      <View style={styles.artistBlock}>
        <View style={styles.artistImageContainer}>
          <View style={styles.artistImgContainer}>
            {/* <Text>
              {props.artistImageUrl}
            </Text> */}
            <Image 
              source={props.imageUrl}
              style={styles.artistImageImg}
            />
          </View>
          {
            clickState ?
            <View style={styles.blockTick}>
              <Image 
                source={require('../assets/icons/check2.png')}
                style={styles.checkImg}
              />
            </View>  : null
          }
        </View>
        <View style={styles.artistNameContainer}>
          <Text style={styles.artistNameText}>
            {props.artistName}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  
  artistBlock: {
    width: screenHeight > 640 ? (screenWidth/3.33) : (screenWidth/3.33),
    height: screenHeight > 640 ? (screenWidth/2.5) : (screenWidth/2.5),
    // backgroundColor: 'red',
    // borderRadius: 500,
    // margin: 
    // borderRightWidth: 1,
    marginBottom: screenHeight > 640 ? 7 : 7,
    marginTop: 0,
    flexDirection: 'column'
  },
  artistImageContainer: {
    height: '70%',
    width: '100%',
    // backgroundColor: 'blue',
    alignItems: 'center'
  },
  artistNameContainer: {
    height: '30%',
    width: '100%',
    // backgroundColor: 'gray',
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 7,
    paddingTop: 0
  },
  artistNameText: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  artistImgContainer: {
    height: (screenWidth/4),
    width: (screenWidth/4),
    backgroundColor: 'purple',
    borderRadius: 1000
  },
  blockTick: {
    height: screenHeight > 640 ? 38 : 33,
    width: screenHeight > 640 ? 38 : 33,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10
  },
  checkImg: {
    height: screenHeight > 640 ? 16 : 13.5 ,
    width: screenHeight > 640 ? 16 : 13.5
  },
  artistImageImg: {
    height: '100%',
    width: '100%',
    borderRadius: 500,
    
  }
})

export default ArtistBlock;