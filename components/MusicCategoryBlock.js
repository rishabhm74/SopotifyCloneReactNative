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


const MusicCategoryBlock = ( props, ref ) => {
  const [ clickState, setClickState ] = useState(true);

  const tickStateHandler = () => {
    clickState ? setClickState(false) : setClickState(true);
  };

  const clickMe = (theVar) => {
    console.log(theVar)
  }



  return (
    <TouchableNativeFeedback
      onPress={props.onPress}
      // onPress={props.onPress, () => clickMe(props.musicCategory) }
      // onPress={props.onPress.bind(this, props.musicCategory)}
      // onPress={[...props, () => clickMe("car")]}
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
              props.clickState ? <Text>Clixk</Text> : null
            }
          </View>
        </View>
      </LinearGradient>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  blockElementGradient: {
    height: screenHeight > 640 ? 78 : 75,
    width: '45.5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: '2.25%',
    marginTop: 0,
    marginBottom: screenHeight > 640 ? 17 : 15,
    padding: 10,
    paddingTop: screenHeight > 640 ? 11 : 10
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
    // backgroundColor: 'red'
  },
  blockInnerViewLeftText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Product Sans Bold 700',
    letterSpacing: 0.5

  },
})

export default MusicCategoryBlock;