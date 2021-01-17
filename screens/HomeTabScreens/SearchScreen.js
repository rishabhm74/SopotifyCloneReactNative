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
    height: 202,
    width: '100%',
    backgroundColor: '#141414',
    padding: 18,
    justifyContent:'flex-end'
  },
  searchTitleText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 35,
    marginBottom: 17
  },
  searchBarContainer: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  searchBarIconView: {
    height: '100%',
    width: '13%',
    justifyContent: 'center',
    alignItems:'flex-end',
    paddingRight: '2%'
  },
  searchBarIcon: {
    height: 28,
    width: 28
  },
  searchBarTextInput: {
    width: '87%',
    height: '100%',
    color: '#292929',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 17,
  },
  browseAllText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 17,
    padding: 18,
    paddingTop: 5,
    paddingLeft: 22,
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