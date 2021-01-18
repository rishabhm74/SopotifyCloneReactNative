import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GetYouStartedBlock from '../../components/GetYouStartedBlock';
import GetYouStartedBlockData from '../../src/data/GetYouStartedBlockData';
import SuggestedArtistBlock from '../../components/SuggestedArtistBlock';
import SuggestedArtistBlockData from '../../src/data/SuggestedArtistBlockData';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const HomeScreen = () => {
  const getYouStartedBlocks = GetYouStartedBlockData.map(startedBlock   =>  <GetYouStartedBlock 
        colorStart = {startedBlock.colorStart}
        colorMiddle = {startedBlock.colorMiddle}
        colorEnd = {startedBlock.colorEnd}
        albumMainTitle = {startedBlock.albumMainTitle}
        albumSubTitle = {startedBlock.albumSubTitle}
        artistsName = {startedBlock.artistsName}
        key = {startedBlock.id}
      />
    )

  const SuggestedArtistBlocks = SuggestedArtistBlockData.map(suggestedArtist => 
      <SuggestedArtistBlock 
        key = {suggestedArtist.id}
        suggestedArtistImgPath = {suggestedArtist.suggestedArtistImgPath}
        suggestedArtistName = {suggestedArtist.suggestedArtistName}
      />
    )


  return (
    <View style={styles.mainHomeView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.toGetYouStartedContainer}>
          <View style={styles.toGetYouStartedContainerTitle}>
            <Text style={styles.toGetYouStartedContainerTitleText}>
              To get you started
            </Text>
            <TouchableOpacity>
              <Image 
                source={require('../../assets/icons/gear.png')}
                style={styles.gearIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.toGetYouStartedAlbumsContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {getYouStartedBlocks}
            </ScrollView>
          </View>

        </View>


        <View style={styles.madeForYouContainer}> 
          <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Product Sans Bold 700', textAlign: 'center' }} > 
            Made for you
          </Text>
          <View style={styles.madeForYouAlbum}>
            <Image 
              source={require('../../assets/images/dailyMix1.png')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <Text style={styles.madeForYouContainerText}>
            Pritam, Arijit Singh, Anupam Roy and more
          </Text>
        </View>

        <View style={styles.popularContainer}>
          <Text style={styles.popularContainerTitle}>
            Suggested artists
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {SuggestedArtistBlocks}
          </ScrollView>
        </View>



        {/* <Text style={styles.showsToTryTitle}>
          Shows to try
        </Text>
        <View style={styles.toGetYouStartedAlbumsContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.showsToTryBlockContainer}>
              <View style={[styles.showsToTryArtContainer, { borderRadius: 10 }]}>

              </View>

            </View>

            <View style={styles.showsToTryBlockContainer}>
              <View style={[styles.showsToTryArtContainer, { borderRadius: 10 }]}>

              </View>

            </View>

            <View style={styles.showsToTryBlockContainer}>
              <View style={[styles.showsToTryArtContainer, { borderRadius: 10 }]}>

              </View>

            </View>

          </ScrollView>
        </View> */}




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
  toGetYouStartedContainer: {
    width: '100%',
    height: screenHeight > 640 ? 350 : 315 ,
    // backgroundColor: 'red',
    // padding: 18,
    paddingTop: screenHeight > 640 ? 60 : 65
  },
  toGetYouStartedContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: screenHeight > 640 ? 25 : 20 ,
    padding: screenHeight > 640 ? 18 : 15,
    paddingTop: 0,
    paddingBottom: 0
  },  
  toGetYouStartedContainerTitleText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 25
  },  
  gearIcon: {
    height: screenHeight > 640 ? 28 : 20 ,
    width: screenHeight > 640 ? 28 : 20 
  },
  toGetYouStartedAlbumsContainer: {
    width: '100%',
    // backgroundColor: 'blue',
    height: 230,
  },
  madeForYouContainer: {
    width: '100%',
    height: screenHeight > 640 ? 415 : 380,
    paddingTop: 35,
    backgroundColor: '#141414'
  },
  madeForYouAlbum: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // backgroundColor: 'red',
    height: screenHeight > 640 ? 220 : 210,
    width: screenHeight > 640 ? 220 : 210,
    marginTop: 25
  },
  madeForYouContainerText: { 
    color: '#ffffff99', 
    fontSize: screenHeight > 640 ? 16 : 15, 
    fontFamily: 'Product-Sans-Regular', 
    textAlign: 'center', 
    marginTop: screenHeight > 640 ? 20 : 18, 
  },
  showsToTryTitle: { 
    color: '#fff', 
    fontSize: 22, 
    fontFamily: 'Product Sans Bold 700', 
    textAlign: 'left',
    paddingLeft: 18,
    paddingBottom: 20 
  },
  popularContainer: {
    width: '100%',
    height: screenHeight > 640 ? 230 : 220,
    // backgroundColor: 'red',
    // padding: 18,
    marginBottom: 30,
    paddingTop: 5
  },
  popularContainerTitle: {
    color: '#fff',
    fontSize: 25, 
    fontFamily: 'Product Sans Bold 700', 
    textAlign: 'left',
    marginBottom: screenHeight > 640 ? 25 : 20,
    marginLeft: screenHeight > 640 ? 18 : 15
  },
  showsToTryBlockContainer: {
    height: 200,
    width: 150,
    // backgroundColor: 'red',
    marginLeft: 18
  },
  showsToTryArtContainer: {
    width: '100%',
    height: 150,
    backgroundColor: 'blue'
  }

})

export default HomeScreen;