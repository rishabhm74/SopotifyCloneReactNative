import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import { StackActions, CommonActions } from '@react-navigation/native';
import MusicCategoryBlock from '../components/MusicCategoryBlock';
import MusicCategoryBlockGradients from '../src/data/MusicCategoryBlockGradients';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const MusicLikeCategory = ({ navigation }) => {
  var [ categoryList, setCategoryList ] = useState([]);
  const [ categoryListLength, setCategoryListLength ] = useState(false);



  const setCategoryListHandler = (category) => {
    if ( categoryList.indexOf(category) == -1 ) { 
      categoryList.push(category);
      setCategoryList(categoryList);
      categoryList.length > 0 ? setCategoryListLength(true) : null;
      categoryList.length == 0 ? setCategoryListLength(false) : null;
    } else {
      categoryList = categoryList.filter((item) =>  item !== category);
      setCategoryList(categoryList);
      categoryList.length > 0 ? setCategoryListLength(true) : null;
      categoryList.length == 0 ? setCategoryListLength(false) : null;
    }

    // console.log(categoryList);
  }



  let gradeintBlocks = MusicCategoryBlockGradients.map(
    (block) => 
      <MusicCategoryBlock 
        gradientLeftColor = {block.gradientLeftColor}
        gradientRightColor = {block.gradientRightColor}
        musicCategory = {block.musicCategory}
        key = {block.key}
        clickState= {false}
        onPress={() => setCategoryListHandler(block.key)}
      /> 
    
  )
  


  const MoveToArtistsScreen = () => {
    let tempList = categoryList;
    setCategoryList([]);
    const resetState = navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'ArtistsSelectScreen',
            params: { musicCategoryList: tempList }
          }
        ]
      })
    )
    return resetState;
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


      {
        categoryListLength  ? 
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
        </View> : null
      }
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
    paddingTop: screenHeight > 640 ? 11 : 15,
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
    paddingTop: screenHeight > 640 ? 6 : 13,
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

export default  MusicLikeCategory;