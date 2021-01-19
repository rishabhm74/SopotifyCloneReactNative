import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LibraryMusicScreen from '../LibraryScreens/LibraryMusicScreen';
import LibraryPodcastsScreen from '../LibraryScreens/LibraryPodcastsScreen';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LibraryTab = createMaterialTopTabNavigator();

const LibraryScreen = () => {
  return (
    <LibraryTab.Navigator
      tabBarOptions={{

        style: {
          elevation: 0,
          // backgroundColor: 'green',
          backgroundColor: '#141414',
          width: '100%',
          height: screenHeight > 640 ? 120 : 110,
          paddingTop: screenHeight > 640 ? 50 : 48,
          paddingLeft: screenHeight > 640 ? 18 : 15,
        },
        tabStyle: {
          // backgroundColor: 'red',
          width: 'auto',
          // marginLeft: 2
          padding: 0,
          marginRight: 15
        },
        indicatorStyle: {
          height: 0,
          width: 'auto'
        },
        labelStyle: {
          fontFamily: 'Product Sans Bold 700',
          // color: '#fff',
          fontSize: 33,
          textTransform: 'capitalize'
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#ffffff60'
      }}
      style={{ backgroundColor: '#141414' }}
      swipeEnabled={true}
    >
      <LibraryTab.Screen 
        name='Music'
        component={LibraryMusicScreen}
      />
      <LibraryTab.Screen 
        name='Podcasts'
        component={LibraryPodcastsScreen}
      />
    </LibraryTab.Navigator>
  )
}

const styles = StyleSheet.create({

})

export default LibraryScreen;