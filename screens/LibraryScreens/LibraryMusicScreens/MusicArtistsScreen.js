import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import MusicLibraryArtistsData from '../../../src/data/MusicLibraryArtistsData';
import MusicLibraryArtistsBlock from '../../../components/MusicLibraryArtistsBlock';




const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MusicArtistsScreen = () => {
  const MusicLibraryArtistsBlocks = MusicLibraryArtistsData.map(artist => 
      <MusicLibraryArtistsBlock 
        key = {artist.id}
        artistImgUrl = {artist.artistImgUrl}
        artistName = {artist.artistName}
      />
    )

  return (
    <View style={{ flex: 1, backgroundColor: '#141414' }}>
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          {MusicLibraryArtistsBlocks}

        </ScrollView>
      </View>
    </View>
      
  )
}

const styles = StyleSheet.create({

})

export default MusicArtistsScreen;