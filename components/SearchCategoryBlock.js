import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Image,
  Text,
  TouchableNativeFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const SearchCategoryBlock = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log(props.text)}
    >
      <LinearGradient 
        style={styles.searchCategoryBlock}
        colors={[ props.bgColorLeft , props.bgColorRight]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
      {/* <View style={[styles.searchCategoryBlock, { backgroundColor: props.bgColor }]}> */}
        <Text style={{ color: '#fff', fontFamily: 'Product Sans Bold 700', fontSize: 18 }}>
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  searchCategoryBlock: {
    height: screenHeight > 640 ? 100 : 95,
    // backgroundColor: '#eee',
    width: screenHeight > 640 ? '44.5%' : '44%',
    margin: '2%',
    borderRadius: 7,
    marginTop: 0,
    marginBottom: '4.25%',
    padding: 14,
    paddingLeft: 12.5
  }
})

export default SearchCategoryBlock;