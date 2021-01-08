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
import ArtistsData from '../components/ArtistsData';
import ArtistBlock from '../components/ArtistBlock';
import { AuthContext } from '../AuthProvider';
import database from '@react-native-firebase/database';

 

const userDbReference = database().ref('/users');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const ArtistsSelectScreen = ({ navigation, route }) => {
  const { user, logout } = useContext(AuthContext);
  const [ artistName, setArtistName ] = useState('');
  var [ artistList, setArtistList ] = useState([]);
  const [ artistListLength, setArtistListLength] = useState(false);
  const { musicCategoryList } = route.params;


  const setArtistListHandler = (theVar) => {
    if ( artistList.indexOf(theVar) == -1 ) { 
      artistList.push(theVar);
      setArtistList(artistList);
      artistList.length >= 3 ? setArtistListLength(true) : null;
      artistList.length < 3 ? setArtistListLength(false) : null;
    } else {
      artistList = artistList.filter((item) =>  item !== theVar);
      setArtistList(artistList);
      artistList.length >= 3 ? setArtistListLength(true) : null;
      artistList.length < 3 ? setArtistListLength(false) : null;
    }


    return ;

  }

  const artistsBlockArray = ArtistsData.map((artist) => 
    <ArtistBlock 
      onPressIn={() => setArtistListHandler(artist.name)}
      imageUrl = {artist.imageUrl}
      artistName = {artist.name}
      key={artist.name}
    />
  )


  // const doneWithArtistSelection = () => {
  //   const finalMusicCategoryList = musicCategoryList;
  //   const finalArtistsList = artistList;
  //   setArtistList([]);
  //   let found;
  //   let userKey;
  //   userDbReference.on('value', function(snapshot) {
  //     const userData = snapshot.val();
  //     if ( userData !== null ) {
  //       Object.keys(userData).forEach(key => {
  //         let tempUserData = userData[key];
  //         if (tempUserData.email === user.email) {
  //           userKey = key;
  //         }
  //       })
  //     }
  //     database()
  //     .ref(`/users/${userKey}`)
  //     .update({
  //       artists: finalArtistsList,
  //       musicCategory: finalMusicCategoryList
  //     })
  //     .then(() => {
  //         console.log("data updated");
  //         return navigation.navigate('MainHomeScreen');
  //       })
  //     .catch(error => console.log(error))

  //   })

  //   return;
  // }

  const doneWithArtistSelection = () => {
    console.log("done with artist selection");
    return navigation.navigate('MainHomeScreen');
  }

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
              onChangeText={(artistText) => setArtistName(artistText) }
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
          {artistsBlockArray}
        </View>
      </ScrollView>


        <LinearGradient
          style={styles.doneContainerGradient}
          colors={[ '#14141400', '#14141400', '#14141420', '#141414' ]}
        >
          <View 
            style={styles.nextButtonContainer}
          >
            {
            artistListLength  ?
              <TouchableNativeFeedback
                onPress={() => doneWithArtistSelection()}
              >
                <View style={styles.nextButtonContainerView}>
                  <Text  style={styles.nextButtonContainerViewText}>
                    DONE
                  </Text>
                </View>
              </TouchableNativeFeedback> : null
            }
          </View>
        </LinearGradient> 
      
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
    height: screenHeight > 640 ? 170 : 155,
    // backgroundColor: 'green',
    marginTop: StatusBar.currentHeight,
    padding: 20,
    paddingTop: screenHeight > 640 ? 15 : 15
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
    height: screenWidth > 640 ? 55 : 45,
    backgroundColor: '#424242',
    borderRadius: screenHeight > 640 ? 5 : 5,
    flexDirection: 'row',
  },
  artistsSearchContainerSearchIconContainer: {
    width: '13%',
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  searchIcon: {
    height: screenWidth > 640 ? 22 : 17,
    width: screenWidth > 640 ? 22 : 17,
    opacity: 0.5,
    marginBottom: screenHeight > 640 ? 2 : 2
  },
  artistsSearchContainerSearchBarContainer: {
    height: '100%',
    width: '87%',
    // backgroundColor: 'green'
  },
  artistsSearchBar: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 16,
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
    paddingTop: screenHeight > 640 ? 5 : 5
  },
  doneContainerGradient: {
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    width: '100%',
    height: 80,
  },
  nextButtonContainer: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18
  },
  nextButtonContainerView: {
    backgroundColor: '#fff',
    padding: 11.5,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 100,
  },
  nextButtonContainerViewText: {
    fontSize:16,
    color: '#141414',
    fontFamily: 'Product Sans Bold 700',
    letterSpacing: 0.5
  }
})

export default  ArtistsSelectScreen;