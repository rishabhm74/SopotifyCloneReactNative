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
import MusicCategoryBlock from '../components/MusicCategoryBlock';
import MusicCategoryBlockGradients from '../components/MusicCategoryBlockGradients';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const MusicLikeCategory = ({ navigation }) => {
  let [ categoryList, setCategoryList ] = useState([]);

  const setCategoryListHandler = (category) => {
    categoryList.indexOf(category) == -1 ? categoryList.push(category) : categoryList = categoryList.filter((item) =>  item !== category)
    
    
    console.log(categoryList)
  }

  const gradeintBlocks = MusicCategoryBlockGradients.map(
      (block) => 
        <MusicCategoryBlock 
          gradientLeftColor = {block.gradientLeftColor}
          gradientRightColor = {block.gradientRightColor}
          musicCategory = {block.musicCategory}
          key = {block.key}
          onPress={() => setCategoryListHandler(block.key)}
          // onPress={() => console.log(block.key)}
        /> 
      
    )

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
        
        {gradeintBlocks}

        

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
    height: screenHeight > 640 ? 68 : 55,
    width: '100%',
    // backgroundColor: 'red',
    marginTop: StatusBar.currentHeight,
    padding: 20,
    paddingTop: screenHeight > 640 ? 10 : 13,
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
    paddingTop: screenHeight > 640 ? 0 : 2,
    overflow: 'hidden'
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