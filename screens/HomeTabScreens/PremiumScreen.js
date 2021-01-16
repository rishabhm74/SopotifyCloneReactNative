import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const PremiumScreen = () => {
  return (
    <View style={styles.mainPremiumView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <Text style={{ color: '#fff' }}>
        Premium
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainPremiumView: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PremiumScreen;