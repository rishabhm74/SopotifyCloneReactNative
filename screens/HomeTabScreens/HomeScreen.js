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
import RecommendedAlbumBlock from '../../components/RecommendedAlbumBlock';
import RecommendedAlbumBlockData from '../../src/data/RecommendedAlbumBlockData';
import TrendingBlock from '../../components/TrendingBlock';
import TrendingBlockData from '../../src/data/TrendingBlockData';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const HomeScreen = () => {
  const getYouStartedBlocks = GetYouStartedBlockData.map(startedBlock   =>  <GetYouStartedBlock 
        key = {startedBlock.id}
        colorStart = {startedBlock.colorStart}
        colorMiddle = {startedBlock.colorMiddle}
        colorEnd = {startedBlock.colorEnd}
        albumMainTitle = {startedBlock.albumMainTitle}
        albumSubTitle = {startedBlock.albumSubTitle}
        artistsName = {startedBlock.artistsName}
        albumArtStartImg = {startedBlock.albumArtStartImg}
        albumArtMiddleImg = {startedBlock.albumArtMiddleImg}
        albumArtEndImg = {startedBlock.albumArtEndImg}
      />
    )

  const SuggestedArtistBlocks = SuggestedArtistBlockData.map(suggestedArtist => 
      <SuggestedArtistBlock 
        key = {suggestedArtist.id}
        suggestedArtistImgPath = {suggestedArtist.suggestedArtistImgPath}
        suggestedArtistName = {suggestedArtist.suggestedArtistName}
      />
    )

  const RecommendedAlbumBlockDatas = RecommendedAlbumBlockData.map(recommendedAlbum => 
      <RecommendedAlbumBlock 
        key = {recommendedAlbum.id}
        albumArt = {recommendedAlbum.albumArt}
        albumTitle = {recommendedAlbum.albumTitle}
        albumArtists = {recommendedAlbum.albumArtists}
      />
    )

  const TrendingBlockDatas = TrendingBlockData.map(trendingAlbum => 
      <TrendingBlock 
        key = {trendingAlbum.id}
        trendingArtitsNames = {trendingAlbum.trendingArtitsNames}
        trendingImg = {trendingAlbum.trendingImg}
        trendingGrad = {trendingAlbum.trendingGrad}
        mainText = {trendingAlbum.mainText}
        subText = {trendingAlbum.subText}
        subTextColor = {trendingAlbum.subTextColor}
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
            {/* <Image 
              source={require('../../assets/images/dailyMix1.png')}
              style={{ height: '100%', width: '100%' }}
            /> */}
            
            <View
              style={{ width: '100%', height: '100%', flexDirection: 'row', flexWrap: 'wrap' }}
            >
              <Image 
                source={require('../../assets/images/albumArt/Banjo.jpeg')}
                style={{ height: '50%', width: '50%' }}
              />
              <Image 
                source={require('../../assets/images/albumArt/BattiGulMeterChalu.jpeg')}
                style={{ height: '50%', width: '50%' }}
              />
              <Image 
                source={require('../../assets/images/albumArt/Lamberghini.jpeg')}
                style={{ height: '50%', width: '50%' }}
              />
              <Image 
                source={require('../../assets/images/albumArt/Tashan.jpeg')}
                style={{ height: '50%', width: '50%' }}
              />
            </View>
            <Image 
              source={require('../../assets/images/dailyMixFrame.png')}
              style={{ height: '100%', width: '100%', position: 'absolute', zIndex: 2 }}
            />
          </View>
          <Text style={styles.madeForYouContainerText}>
            Pritam, Arijit Singh, Anupam Roy and more
          </Text>
        </View>

        <View style={styles.recommendedForYouContainer}>
          <Text style={styles.recommendedForYouContainerTitle}>
            Recommended for you
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {RecommendedAlbumBlockDatas}
          </ScrollView>
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



        <View style={styles.trendingContainer}>
          <Text style={styles.trendingContainerTitle}>
            Popular and Trending
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {TrendingBlockDatas}


          </ScrollView>

        </View>


        <View style={{ width: '100%', height: 50 }} />
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
    height: screenHeight > 640 ? 22 : 20 ,
    width: screenHeight > 640 ? 22 : 20 
  },
  madeForYouContainer: {
    width: '100%',
    height: screenHeight > 640 ? 400 : 380,
    paddingTop: screenHeight > 640 ? 30 : 35,
    // backgroundColor: '#141414'
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
    marginBottom: screenHeight > 640 ? 22 : 20,
    marginLeft: screenHeight > 640 ? 18 : 15
  },
  recommendedForYouContainer: {
    height: screenHeight > 640 ? 267 : 250,
    width: '100%',
    // backgroundColor: 'green',
    marginBottom: 30
  },
  recommendedForYouContainerTitle: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Product Sans Bold 700',
    textAlign: 'center',
    marginBottom: 25
  },
  trendingContainer: {
    width: '100%',
    height: 280, //280
    // backgroundColor: 'red'
  },
  trendingContainerTitle: {
    padding: screenHeight > 640 ? 18 : 15,
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 25,
    paddingBottom: 20
  },


})

export default HomeScreen;