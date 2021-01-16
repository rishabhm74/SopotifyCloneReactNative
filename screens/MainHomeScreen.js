import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Image,
  Text
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Foundation';
import HomeScreen from './HomeTabScreens/HomeScreen';
import SearchScreen from './HomeTabScreens/SearchScreen';
import LibraryScreen from './HomeTabScreens/LibraryScreen';
import PremiumScreen from './HomeTabScreens/PremiumScreen';
// import Ionicons from 'react-native-ionicons';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const MainHomeTab = createBottomTabNavigator()


const FocuedTab = ( props ) => {

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      { props.iconName === 'home'? <Image 
        source={require(`../assets/icons/home.png`)}
        style={{ height: 28, width: 28, marginBottom: 2.5 }}
      /> : null}
      { props.iconName === 'search'? <Image 
        source={require(`../assets/icons/search2.png`)}
        style={{ height: 28, width: 28, marginBottom: 2.5 }}
      /> : null}
      { props.iconName === 'Your library'? <Image 
        source={require(`../assets/icons/library.png`)}
        style={{ height: 28, width: 28, marginBottom: 2.5 }}
      /> : null}
      { props.iconName === 'premium'? <Image 
        source={require(`../assets/icons/spotify.png`)}
        style={{ height: 28, width: 28, marginBottom: 2.5 }}
      /> : null}
      <Text style={{ color: '#fff', fontSize: 10.5, textTransform: 'capitalize', fontFamily:'Product-Sans-Regular' }}>
        {props.iconName}
      </Text>
    </View>
  )
}

const NotFocusedTab = ( props ) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      { props.iconName === 'home'? <Image 
        source={require(`../assets/icons/homeOutline.png`)}
        style={{ height: 28, width: 28, opacity: 0.6 }}
      /> : null}
      { props.iconName === 'search'? <Image 
        source={require(`../assets/icons/search2.png`)}
        style={{ height: 28, width: 28, opacity: 0.6 }}
      /> : null}
      { props.iconName === 'Your library'? <Image 
        source={require(`../assets/icons/library.png`)}
        style={{ height: 28, width: 28, opacity: 0.6 }}
      /> : null}
      { props.iconName === 'premium'? <Image 
        source={require(`../assets/icons/spotify.png`)}
        style={{ height: 28, width: 28, opacity: 0.6 }}
      /> : null}
      
    </View>
  )
}

const MainHomeScreen = () => {

  return (

    <MainHomeTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if ( route.name === 'HomeScreen' ) {
            iconName = focused ? 'home' : 'home'
          } else if ( route.name === 'SearchScreen' ) {
            iconName = focused ? 'search' : 'search'
          } else if ( route.name === 'LibraryScreen' ) {
            iconName = focused ? 'Your library' : 'Your library'
          } else if ( route.name === 'PremiumScreen' ) {
            iconName = focused ? 'premium' : 'premium'
          } 

          if ( focused ) {
            return <FocuedTab 
              iconName={iconName} 
              color={color} 
              screenTitle={route.name} 
            />
          } else if ( !focused ) {
            return <NotFocusedTab 
              iconName={iconName} 
              color={color} 
              screenTitle={route.name} 
            />
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: '#fff', 
        inactiveTintColor: '#ffffff50',
          labelStyle: {
            fontSize: 0
        },
        style: {
          height: 65,
          width: '100%',
          elevation: 0,
          borderTopWidth: 0,
          // paddingBottom: 8,
          paddingLeft: '2.5%',
          paddingRight: '2.5%',
          backgroundColor: '#292929'
        },
        keyboardHidesTabBar: true
      }}
    >
      <MainHomeTab.Screen 
        name="HomeScreen"
        component={HomeScreen}
      />
      <MainHomeTab.Screen 
        name="SearchScreen"
        component={SearchScreen}
      />
      <MainHomeTab.Screen 
        name="LibraryScreen"
        component={LibraryScreen}
      />
      <MainHomeTab.Screen 
        name="PremiumScreen"
        component={PremiumScreen}
      />
    </MainHomeTab.Navigator>


  )
}

const styles = StyleSheet.create({
  mainHomeScreenView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default MainHomeScreen;