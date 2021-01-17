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
        <Text style={{ color: '#fff', fontFamily: 'Product Sans Bold 700', fontSize: 19 }}>
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  searchCategoryBlock: {
    height: 100,
    // backgroundColor: '#eee',
    width: '43.5%',
    margin: '2%',
    borderRadius: 7,
    marginTop: 0,
    marginBottom: '4.25%',
    padding: 15,
    paddingLeft: 12.5
  }
})

export default SearchCategoryBlock;