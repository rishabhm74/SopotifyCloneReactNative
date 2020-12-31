import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AuthStackStack from './navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './navigation/AuthStack';

const App = () => {
  
  return (
    <NavigationContainer>
      <View style={styles.mainAppView}>
        <AuthStack />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  mainAppView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#141414'
  }
})

export default App;
