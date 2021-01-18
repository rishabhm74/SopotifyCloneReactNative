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
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

import SearchCategoryBlock from '../../components/SearchCategoryBlock';
import SearchCategoryBlockData from '../../src/data/SearchCategoryBlockData';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const SearchScreen = () => {

  const SearchCategoryBlocks = SearchCategoryBlockData.map(block => 
    <SearchCategoryBlock  
      bgColorRight = {block.bgColorRight}
      bgColorLeft = {block.bgColorLeft}
      key = {block.text}
      text = {block.text}
    />
    )


  return (
    <View style={styles.mainSearchView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchScreenTitleContainer}>
          <Text style={styles.searchTitleText}>
            Search
          </Text>
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBarIconView}>
              <Image 
                source={require('../../assets/icons/searchBlack.png')}
                style={styles.searchBarIcon}
              />
            </View>
            <TextInput 
              placeholder="Artists, songs, or podcasts"
              style={styles.searchBarTextInput}
              placeholderTextColor='#333'
            />
          </View>
        </View>

        <Text style={styles.browseAllText}>
          Browse all
        </Text>

        <View style={styles.browseBlocksContainer}> 

          {SearchCategoryBlocks}

        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainSearchView: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#141414',
  },
  searchScreenTitleContainer: {
    height: screenHeight > 640 ? 200 : 175,
    width: '100%',
    backgroundColor: '#141414',
    padding: 15,
    justifyContent:'flex-end'
  },
  searchTitleText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: screenHeight > 640 ? 35 : 32,
    marginBottom: screenHeight > 640 ? 17 : 14
  },
  searchBarContainer: {
    width: '100%',
    height: screenHeight > 640 ? 55 : 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  searchBarIconView: {
    height: '100%',
    width: screenHeight > 640 ? '13%' : '11%',
    justifyContent: 'center',
    alignItems:'flex-end',
    paddingRight: screenHeight > 640 ? '2%' : '0.5%'
  },
  searchBarIcon: {
    height: screenHeight > 640 ? 28 : 25,
    width: screenHeight > 640 ? 28 : 25,
    marginBottom: screenHeight > 640 ? 0: 2.5
  },
  searchBarTextInput: {
    width: screenHeight > 640 ? '87%' : '89%',
    height: '100%',
    color: '#292929',
    fontFamily: 'Product Sans Bold 700',
    fontSize: screenHeight > 640 ? 17 : 15,
  },
  browseAllText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 17,
    padding: 16,
    paddingTop: 5,
    paddingLeft: 18,
    paddingBottom: 10
  },
  browseBlocksContainer: {
    width: '100%',
    height: 'auto',
    // backgroundColor: 'red',
    // padding: 15,
    paddingTop: 0,
    flexDirection: 'row',
    paddingBottom: 70,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  
})

export default SearchScreen;