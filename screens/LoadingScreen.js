import React from 'react';
import { 
  View, 
  StatusBar,
  Image,
  Text
} from 'react-native';



const LoadingScreen = () => {

  return (
    <View style={{ flex: 1, backgroundColor: '#141414', justifyContent: 'center', alignItems: 'center'  }} >
      <StatusBar 
        translucent={true}
        backgroundColor="#141414"
        barStyle="light-content"
      />
      <Image 
        source={require('../assets/images/splashLogo.png')}
        style={{ height: 170, width: 170 }}
      />
    </View>
  )
}

export default LoadingScreen;