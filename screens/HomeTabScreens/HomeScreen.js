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


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const HomeScreen = () => {
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
              <View style={styles.startedAlbumBlock}>
                <View style={styles.albumArtContainer}>

                </View>

              </View>
              <View style={styles.startedAlbumBlock}>
                <View style={styles.albumArtContainer}>

                </View>
                
              </View>
              <View style={styles.startedAlbumBlock}>
                <View style={styles.albumArtContainer}>

                </View>
                
              </View>

            </ScrollView>
          </View>

        </View>


        <View style={styles.madeForYouContainer}> 
          <Text style={{ color: '#fff', fontSize: 20, fontFamily: 'Product Sans Bold 700', textAlign: 'center' }} > 
            Made for you
          </Text>
          <View style={styles.madeForYouAlbum}>

          </View>
          <Text style={{ color: '#ffffff99', fontSize: 16, fontFamily: 'Product-Sans-Regular', textAlign: 'center', marginTop: 18 }}>
            Pritam, Arijit Singh, Anupam Roy and more
          </Text>
        </View>

        <View style={styles.popularContainer}>
          <Text style={styles.popularContainerTitle}>
            Popular and Trending
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>

              </View>
              <Text>

              </Text>
            </View>
            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>

              </View>
              <Text>

              </Text>
            </View>
            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>

              </View>
              <Text>

              </Text>
            </View>
            <View style={styles.popularBlock}>
              <View style={styles.popularBlockAlbumArt}>

              </View>
              <Text>

              </Text>
            </View>
          </ScrollView>
        </View>



        <Text style={styles.showsToTryTitle}>
          Shows to try
        </Text>
        <View style={styles.toGetYouStartedAlbumsContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.startedAlbumBlock}>
              <View style={[styles.albumArtContainer, { borderRadius: 10 }]}>

              </View>

            </View>
            <View style={styles.startedAlbumBlock}>
              <View style={[styles.albumArtContainer, { borderRadius: 10 }]}>

              </View>
              
            </View>
            <View style={styles.startedAlbumBlock}>
              <View style={[styles.albumArtContainer, { borderRadius: 10 }]}>

              </View>
              
            </View>
            <View style={styles.startedAlbumBlock}>
              <View style={[styles.albumArtContainer, { borderRadius: 10 }]}>

              </View>
              
            </View>
            <View style={styles.startedAlbumBlock}>
              <View style={[styles.albumArtContainer, { borderRadius: 10 }]}>

              </View>
              
            </View>

          </ScrollView>
        </View>




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
    // backgroundColor: 'green',
    // padding: 18,
    paddingTop: 60
  },
  toGetYouStartedContainerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
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
    // backgroundColor: 'green',
    height: 200,
  },
  startedAlbumBlock: {
    height: 200,
    width: 150,
    backgroundColor: 'red',
    marginLeft: 18
  },
  albumArtContainer: {
    width: '100%',
    height: 150,
    backgroundColor: 'blue'
  },
  madeForYouContainer: {
    width: '100%',
    height: 430,
    paddingTop: 45,
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
    height: 250,
    // backgroundColor: 'red',
    // padding: 18,
    marginBottom: 30,
    paddingTop: 5
  },
  popularContainerTitle: {
    color: '#fff',
    fontSize: 27, 
    fontFamily: 'Product Sans Bold 700', 
    textAlign: 'left',
    marginBottom: 18,
    marginLeft: 18
  },
  popularBlock: {
    height: 190,
    width: 150,
    backgroundColor: 'green',
    marginLeft: 18
  },
  popularBlockAlbumArt: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    borderRadius: 300
  }

})

export default HomeScreen;