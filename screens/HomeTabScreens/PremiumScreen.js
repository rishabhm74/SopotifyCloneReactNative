import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  ScrollView
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const PremiumScreen = () => {
  return (
    <View style={styles.mainPremiumView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.premiumScreenTitleContainer}>
            <Text style={styles.premiumScreenTitleText}>
              Try Premium free for {'\n'} 1 month
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainPremiumView: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#141414',
  },
  premiumScreenTitleContainer: {
    width: '100%',
    height: 205,
    // backgroundColor: 'red',
    justifyContent:'flex-end',
    paddingBottom: 15
  },
  premiumScreenTitleText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 29,
    textAlign: 'center'
  }
})

export default PremiumScreen;