import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  ScrollView,
  Image
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const HomeScreen = () => {
  return (
    <View style={styles.mainHomeView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <ScrollView>
        <Image 
          source={require('../../assets/images/homeBgBlue.png')}
          style={{ height: 200 }}
        />



      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  mainHomeView: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#141414',
  },

})

export default HomeScreen;