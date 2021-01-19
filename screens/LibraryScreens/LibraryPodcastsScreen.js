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

import PodcastsShowsScreen from '../LibraryScreens/LibraryPodcastsScreens/PodcastsShowsScreen';
import PodcastsEpisodesScreen from '../LibraryScreens/LibraryPodcastsScreens/PodcastsEpisodesScreen';
import PodcastsDownloadsScreen from '../LibraryScreens/LibraryPodcastsScreens/PodcastsDownloadsScreen';




const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LibraryMusicTab = createMaterialTopTabNavigator();

const LibraryMusicScreen = () => {
  return(
    <View style={styles.mainLibraryView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <LibraryMusicTab.Navigator
        initialRouteName="Playlists"
        tabBarOptions={{
          style: {
            elevation: 0,
            backgroundColor: '#141414',
            height: screenHeight > 640 ? 50 : 45,
            padding: 0,
          },
          tabStyle: {
            marginTop: 0,
            padding: 0,
            width: 'auto',
            marginRight: 30
          },
          labelStyle: {
            fontFamily: 'Product Sans Bold 700',
            fontSize: 17,
            textTransform: 'capitalize',
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#ffffff60',
          indicatorStyle: {
            backgroundColor: '#22ce5e',
            // height: 3,
            height: 0
          },
        }}
      >
        <LibraryMusicTab.Screen 
          name="Episodes"
          component={PodcastsEpisodesScreen}
        />
        <LibraryMusicTab.Screen 
          name="Downloads"
          component={PodcastsDownloadsScreen}
        />
        <LibraryMusicTab.Screen 
          name="Shows"
          component={PodcastsShowsScreen}
        />
      </LibraryMusicTab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  mainLibraryView: { 
    flex: 1, 
    backgroundColor: '#141414' ,
    paddingLeft: screenHeight > 640 ? 18 : 15,
    paddingRight: screenHeight > 640 ? 18 : 15,

  }
})

export default LibraryMusicScreen;