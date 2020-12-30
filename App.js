import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import LoginGreetScreen from './screens/LoginGreetScreen';


const App = () => {
  
  return (
    <View style={styles.mainAppView}>
      <LoginGreetScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  mainAppView: {
    flex: 1
  }
})

export default App;
