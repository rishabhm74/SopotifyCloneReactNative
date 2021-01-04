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


const MusicLikeCategory = ({ navigation }) => {

  const MoveToArtistsScreen = () => {
    return navigation.navigate('ArtistsSelectScreen');
  }

  return (
    <View style={styles.mainMusicLikeCategoryView}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#14141499"
        translucent={true}
      />
      
      <View style={styles.musicLikeCategoryTitleView}>
        <Text  style={styles.musicLikeCategoryTitleViewText}>
          What music do you like?
        </Text>
      </View>

      <View style={styles.mainMusicLikeCategoryBlocksContainer}>
        
        <TouchableNativeFeedback
          onPress={() => console.log("click")}
        >
          <LinearGradient
            colors={['#c52222',  '#e62424']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Hindi
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>


        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#b67724',  '#E89425']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  English
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#92207E',  '#AA2590']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Punjabi
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#b89047',  '#D8A850']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Tamil
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#13a161',  '#16C277']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Telugu
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#78917b',  '#A5CBAA']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Malyalam
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#965c3f',  '#B8744E']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Marathi
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#aa4f70',  '#D2648A']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Gujarati
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

        
        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#396eaf',  '#4382CE']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Bengali
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <LinearGradient
            colors={['#b41c29',  '#da1c2f']} 
            style={styles.blockElementGradient}
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
          >
            <View style={styles.blockInnerView}>
              <View  style={styles.blockInnerViewLeft}>
                <Text style={styles.blockInnerViewLeftText}>
                  Kannada
                </Text>
              </View>
              <View  style={styles.blockInnerViewRight}>

              </View>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>

      </View>


      <View 
        style={styles.nextButtonContainer}
      >
        <TouchableNativeFeedback
          onPress={() => MoveToArtistsScreen()}
        >
          <View style={styles.nextButtonContainerView}>
            <Text  style={styles.nextButtonContainerViewText}>
              NEXT
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainMusicLikeCategoryView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#141414'
  },
  musicLikeCategoryTitleView: {
    height: 65,
    width: '100%',
    // backgroundColor: 'red',
    marginTop: StatusBar.currentHeight,
    padding: 20,
    paddingTop: 17,
  },
  musicLikeCategoryTitleViewText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize:  29
  },
  mainMusicLikeCategoryBlocksContainer: {
    width: '100%',
    // backgroundColor: 'red',
    height: 480,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingTop: 7,
    overflow: 'hidden'
  },
  blockElementGradient: {
    height: 80,
    width: '45.5%',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: '2.25%',
    marginTop: 0,
    marginBottom: 17,
    padding: 10,
    paddingTop: 11
  },
  blockInnerView: {
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  },
  blockInnerViewLeft: {
    height: '100%',
    width: '80%',
    // backgroundColor: 'red'
  },
  blockInnerViewRight: {
    height: '100%',
    width: '20%',
    // backgroundColor: 'red'
  },
  blockInnerViewLeftText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Product Sans Bold 700',
    letterSpacing: 0.5

  },
  nextButtonContainer: {
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    width: '100%',
    height: 80,
    // backgroundColor: '#141414'
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18
  },
  nextButtonContainerView: {
    backgroundColor: '#fff',
    padding: 11.5,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 100
  },
  nextButtonContainerViewText: {
    fontSize:16,
    color: '#141414',
    fontFamily: 'Product Sans Bold 700',
    letterSpacing: 0.5
  }
})

export default  MusicLikeCategory;