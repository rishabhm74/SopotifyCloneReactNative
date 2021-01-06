import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableNativeFeedback,
  Dimensions,
  Alert,
  TextInput,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const ArtistsSelectScreen = () => {
  const [ artistName, setArtistName ] = useState('');

  return (
    <View style={styles.mainArtistsSelectScreenView}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#14141499"
        translucent={true}

      />
      
      <View style={styles.artistsSelectionScreenTitleView}>
        <View style={styles.artistsSelectionScreenTitleTextContainer}> 
          <Text style={styles.artistsSelectionScreenTitleTextContainerText}>
            Choose 3 or more artists you like.
          </Text>
        </View>
        <View style={styles.artistsSearchContainerView}>
          <View style={styles.artistsSearchContainerSearchIconContainer}>
            <Image 
              source={require('../assets/icons/search.png')}
              style={styles.searchIcon}
            />
          </View>
          <View style={styles.artistsSearchContainerSearchBarContainer}>
            <TextInput 
              style={styles.artistsSearchBar}
              placeholder="Search"
              value={artistName}
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              onChangeText={(artist) => setArtistName(artist) }
              placeholderTextColor="#ffffff50"
            />
          </View>
        </View>
      </View> 

      <ScrollView 
        showsVerticalScrollIndicator={false}
        bounces={true}
        style={styles.artistsScrollView}
      >
        <View style={styles.artistsScrollViewInnerView}>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View> 
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                Abhay Jodhpurkar
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View> 
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                k. j. yesudas
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              {/* <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View>  */}
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                Shreya ghosal
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              {/* <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View>  */}
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                unni menon
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View> 
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                tippu
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              {/* <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View>  */}
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                Shreya ghosal
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              {/* <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View>  */}
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                unni menon
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View> 
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                tippu
              </Text>
            </View>
          </View>
          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              {/* <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View>  */}
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                Shreya ghosal
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              {/* <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View>  */}
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                unni menon
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View> 
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                tippu
              </Text>
            </View>
          </View>
          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              {/* <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View>  */}
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                Shreya ghosal
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              {/* <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View>  */}
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                unni menon
              </Text>
            </View>
          </View>

          <View style={styles.artistBlock}>
            <View style={styles.artistImageContainer}>
              <View style={styles.artistImgContainer}>

              </View>
              <View style={styles.blockTick}>
                <Image 
                  source={require('../assets/icons/check2.png')}
                  style={styles.checkImg}
                />
              </View> 
            </View>
            <View style={styles.artistNameContainer}>
              <Text style={styles.artistNameText}>
                tippu
              </Text>
            </View>
          </View>
          

          
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  mainArtistsSelectScreenView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#141414'
  },
  artistsSelectionScreenTitleView: {
    width: '100%',
    height: screenHeight > 640 ? 185 : 165,
    // backgroundColor: 'green',
    marginTop: StatusBar.currentHeight,
    padding: 20,
    paddingTop: screenHeight > 640 ? 13 : 15
  },
  artistsSelectionScreenTitleTextContainer: {
    width: '100%',
    marginBottom: screenHeight > 640 ? 20 : 15
  },
  artistsSelectionScreenTitleTextContainerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Product Sans Bold 700',
    lineHeight: 37
  },
  artistsSearchContainerView: {
    width: '100%',
    height: screenWidth > 640 ? 55 : 50,
    backgroundColor: '#424242',
    borderRadius: screenHeight > 640 ? 5 : 5,
    flexDirection: 'row',
  },
  artistsSearchContainerSearchIconContainer: {
    width: '14%',
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  searchIcon: {
    height: screenWidth > 640 ? 22 : 20,
    width: screenWidth > 640 ? 22 : 20,
    opacity: 0.5,
    marginBottom: screenHeight > 640 ? 2 : 2
  },
  artistsSearchContainerSearchBarContainer: {
    height: '100%',
    width: '86%',
    // backgroundColor: 'green'
  },
  artistsSearchBar: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 17,
  },
  artistsScrollView: {
    width: '100%',
    height: screenHeight - 200,
    // padding: 20,
    paddingTop: 0,
  },
  artistsScrollViewInnerView: {
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: screenHeight > 640 ? 20 : 15,
    // backgroundColor: 'green',
    paddingTop: 0
  },
  artistBlock: {
    width: screenHeight > 640 ? (screenWidth/3.33) : (screenWidth/3.33),
    height: screenHeight > 640 ? (screenWidth/2.5) : (screenWidth/2.5),
    // backgroundColor: 'red',
    // borderRadius: 500,
    // margin: 
    // borderRightWidth: 1,
    marginBottom: screenHeight > 640 ? 7 : 7,
    marginTop: 0,
    flexDirection: 'column'
  },
  artistImageContainer: {
    height: '70%',
    width: '100%',
    // backgroundColor: 'blue',
    alignItems: 'center'
  },
  artistNameContainer: {
    height: '30%',
    width: '100%',
    // backgroundColor: 'gray',
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 7,
    paddingTop: 0
  },
  artistNameText: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  artistImgContainer: {
    height: (screenWidth/4),
    width: (screenWidth/4),
    backgroundColor: 'purple',
    borderRadius: 1000
  },
  blockTick: {
    height: screenHeight > 640 ? 38 : 33,
    width: screenHeight > 640 ? 38 : 33,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10
  },
  checkImg: {
    height: screenHeight > 640 ? 16 : 13.5 ,
    width: screenHeight > 640 ? 16 : 13.5
  }
  
})

export default  ArtistsSelectScreen;