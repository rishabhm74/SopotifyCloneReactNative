import React, { useContext, useState, useRef, useImperativeHandle, forwardRef } from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const MusicCategoryBlock = ( props ) => {
  const [ clickState, setClickState ] = useState(false);

  const tickStateHandler = () => {
    clickState ? setClickState(false) : setClickState(true);
  };

 



  return (
    <TouchableNativeFeedback
      onPress={props.onPress}
      onPressOut={() => tickStateHandler()}
    >
      <LinearGradient
        colors={[ props.gradientLeftColor,  props.gradientRightColor]} 
        style={styles.blockElementGradient}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
        
      >
        <View style={styles.blockInnerView}>
          <View  style={styles.blockInnerViewLeft}>
            <Text style={styles.blockInnerViewLeftText}>
              {props.musicCategory}
            </Text>
          </View>
          <View  style={styles.blockInnerViewRight}>
            {
              clickState ? 
                <View style={styles.blockTick}>
                  <Image 
                    source={require('../assets/icons/check2.png')}
                    style={styles.checkImg}
                  />
                </View> : null
            }
          </View>
        </View>
      </LinearGradient>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  blockElementGradient: {
    height: screenHeight > 640 ? 78 : 73,
    width: '45.5%',
    backgroundColor: '#fff',
    borderRadius: screenHeight > 640 ? 10 : 8,
    margin: '2.25%',
    marginTop: 0,
    marginBottom: screenHeight > 640 ? 17 : 15,
    padding: 12,
    paddingTop: screenHeight > 640 ? 11 : 9,
    paddingRight: screenHeight > 640 ? 10 : 7
  },
  blockInnerView: {
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  },
  blockInnerViewLeft: {
    height: '100%',
    width: '80%',
    // backgroundColor: 'red'
  },
  blockInnerViewRight: {
    height: '100%',
    width: '20%',
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    padding: 5,
    paddingTop: screenHeight > 640 ? 2.25 : 1 , 
  },
  blockInnerViewLeftText: {
    color: '#fff',
    fontSize: 16.5,
    fontFamily: 'Product Sans Bold 700',
    letterSpacing: 0.5

  },
  blockTick: {
    height: screenHeight > 640 ? 22.5 : 22.5,
    width: screenHeight > 640 ? 22.5 : 22.5,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkImg: {
    height: 11,
    width: 11
  }
})

export default MusicCategoryBlock;