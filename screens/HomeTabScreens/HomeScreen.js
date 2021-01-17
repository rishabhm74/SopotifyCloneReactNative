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


  return (
    <View style={styles.mainHomeView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* <LinearGradient 
          style={{ height: 150, width: '100%' }}
          colors={[ '#4fbbf525', '#4fbbf525' , '#4fbbf512', '#4fbbf506' , '#14141450' ]}
        /> */}
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
          <Text style={{ color: '#ffffff99', fontSize: 16, fontFamily: 'Product-Sans-Regular', textAlign: 'center', marginTop: 20 }}>
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

            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>
                <Image 
                  source={require('../../assets/images/artists/Arijit-Singh.jpeg')}
                  style={{ height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                />
              </View>
              <Text style={styles.suggestedArtistsName}>
                Arijit Singh
              </Text>
              <Text>

              </Text>
            </View>

            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>
                <Image 
                  source={require('../../assets/images/artists/ARRahman.jpeg')}
                  style={{ height: '100%', width: '100%' }}
                />
              </View>
              <Text style={styles.suggestedArtistsName}>
                A. R. Rahman
              </Text>
              <Text>

              </Text>
            </View>

            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>
                <Image 
                  source={require('../../assets/images/artists/Jubin-Nautiyal.jpeg')}
                  style={{ height: '100%', width: '100%' }}
                />
              </View>
              <Text style={styles.suggestedArtistsName}>
              Jubin Nautiyal
              </Text>
              <Text>

              </Text>
            </View>

            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>
                <Image 
                  source={require('../../assets/images/artists/Rahat-Fateh-Ali-Khan.jpeg')}
                  style={{ height: '100%', width: '100%' }}
                />
              </View>
              <Text style={styles.suggestedArtistsName}>
              Rahat Fateh Ali Khan
              </Text>
              <Text>

              </Text>
            </View>

            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>
                <Image 
                  source={require('../../assets/images/artists/Sunidhi-Chauhan.jpeg')}
                  style={{ height: '100%', width: '100%' }}
                />
              </View>
              <Text style={styles.suggestedArtistsName}>
              Sunidhi Chauhan
              </Text>
              <Text>

              </Text>
            </View>

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
    height: 350,
    // backgroundColor: 'red',
    // padding: 18,
    paddingTop: 60
  },
  toGetYouStartedContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    padding: 18,
    paddingTop: 0,
    paddingBottom: 0
  },  
  toGetYouStartedContainerTitleText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 25
  },  
  gearIcon: {
    height: 28,
    width: 28
  },
  toGetYouStartedAlbumsContainer: {
    width: '100%',
    // backgroundColor: 'blue',
    height: 230,
  },
  






  madeForYouContainer: {
    width: '100%',
    height: 415,
    paddingTop: 35,
    // backgroundColor: 'green'
  },
  madeForYouAlbum: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
    height: 250,
    width: 250,
    marginTop: 25
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
    height: 230,
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
    marginBottom: 25,
    marginLeft: 18
  },
  popularBlock: {
    height: 190,
    width: 135,
    // backgroundColor: 'green',
    marginLeft: 20,

  },
  popularBlockAlbumArt: {
    width: 135,
    height: 135,
    // backgroundColor: 'red',
    borderRadius: 300,
    overflow: 'hidden',
  },
  suggestedArtistsName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Product Sans Bold 700',
    marginTop: 12
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