import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Dimensions,
  Text,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const PremiumScreen = () => {
  return (
    <View style={styles.mainPremiumView}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="#14141499" />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.premiumScreenTitleContainer}>
            <Text style={styles.premiumScreenTitleText}>
              Try Premium free for {'\n'} 1 month
            </Text>
          </View>

          <Swiper 
            style={styles.swiperWrapper}
            dotColor='#ffffff50'
            activeDotColor='#fff'
          >

            <View style={styles.mainCard}>
              <View style={styles.cardLeft}>
                <View style={styles.leftCardTop}>
                  <Text style={styles.leftCardTopText}>Free</Text>
                </View>
                <View style={styles.leftCardText}>
                  <Text style={styles.leftCardTextMain}>Ad breaks</Text>
                </View>
              </View>
              <View style={styles.cardRight}>
                <LinearGradient
                  colors={['#02634D', '#11B170']}
                  style={styles.cardRightGrad}
                  start={{ x: 0, y: 0 }}
                  end={{ x:1, y: 1 }}
                >
                  <View>
                    <View style={styles.leftCardTop}>
                      <Text style={styles.leftCardTopTextPr}>Premium</Text>
                    </View>
                    <View style={styles.leftCardText}>
                      <Text style={styles.leftCardTextMain}>Ad-free music</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>

            <View style={styles.mainCard}>
              <View style={styles.cardLeft}>
                <View style={styles.leftCardTop}>
                  <Text style={styles.leftCardTopText}>Free</Text>
                </View>
                <View style={styles.leftCardText}>
                  <Text style={styles.leftCardTextMain}>Streaming only</Text>
                </View>
              </View>
              <View style={styles.cardRight}>
                <LinearGradient
                  colors={['#02634D', '#11B170']}
                  style={styles.cardRightGrad}
                  start={{ x: 0, y: 0 }}
                  end={{ x:1, y: 1 }}
                >
                  <View>
                    <View style={styles.leftCardTop}>
                      <Text style={styles.leftCardTopTextPr}>Premium</Text>
                    </View>
                    <View style={styles.leftCardText}>
                      <Text style={styles.leftCardTextMain}>Download songs</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>

            <View style={styles.mainCard}>
              <View style={styles.cardLeft}>
                <View style={styles.leftCardTop}>
                  <Text style={styles.leftCardTopText}>Free</Text>
                </View>
                <View style={styles.leftCardText}>
                  <Text style={styles.leftCardTextMain}>Listen alone</Text>
                </View>
              </View>
              <View style={styles.cardRight}>
                <LinearGradient
                  colors={['#02634D', '#11B170']}
                  style={styles.cardRightGrad}
                  start={{ x: 0, y: 0 }}
                  end={{ x:1, y: 1 }}
                >
                  <View>
                    <View style={styles.leftCardTop}>
                      <Text style={styles.leftCardTopTextPr}>Premium</Text>
                    </View>
                    <View style={styles.leftCardText}>
                      <Text style={styles.leftCardTextMain}>Group Session</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>

            

            

            

          </Swiper>

          <View style={styles.premiumButtonContainer}>
            <TouchableNativeFeedback>
              <View style={styles.createPlaylistView}>
                <Text style={styles.createPlaylistText}>
                  get premium
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <Text style={styles.playlistInfoSubText}>
            Only $199/month after. Offer only for users who are new to Premium. Terms apply.
          </Text>

          <View style={styles.spotifyFreeBlock} >
            <Text style={styles.spotifyFreeText}>
              Spotify Free
            </Text>
            <Text style={styles.currentPlanText}>
              Current plan
            </Text>
          </View>


          <LinearGradient 
            style={styles.bigCardMain}
            colors={[ '#4F99F4', '#243caa' ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Text style={styles.cardHeaderLeftText}>
                  Mini
                </Text>
              </View>
              <View style={styles.cardHeaderRight}>
                <Text style={styles.cardHeaderRightTextTop}>
                  From $7
                </Text>
                <Text style={styles.cardHeaderRightTextBottom}>
                  for 1 day
                </Text>
              </View>
            </View>

            <Text style={styles.infoText}>
              Day and week plans {'\n'}
              Ad-free music on mobile {'\n'}
              Download 30 songs on 1 mobile device
            </Text>

            <TouchableNativeFeedback>
              <View style={styles.viewPlansButton}>
                <Text style={styles.viewPlansButtonText}>
                  View plans
                </Text>
              </View>
            </TouchableNativeFeedback>

            <Text style={styles.tocText}>
              Terms and conditions apply.
            </Text>

          </LinearGradient>

          <LinearGradient 
            style={[styles.bigCardMain, { height: screenHeight > 640 ? 300 : 290 }]}
            colors={[ '#045746', '#1bc47a' ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={[styles.cardHeader, { height: 75 }]}>
              <View style={styles.cardHeaderLeft}>
                <Text style={styles.cardHeaderLeftText}>
                  Premium Individual
                </Text>
              </View>
              <View style={styles.cardHeaderRight}>
                <Text style={styles.cardHeaderRightTextTop}>
                  Free
                </Text>
                <Text style={styles.cardHeaderRightTextBottom}>
                  for 1 month
                </Text>
              </View>
            </View>

            <Text style={[styles.infoText, { marginTop: screenHeight > 640 ? 45 : 50 }]}>
              Try Premium free fot 1 month {'\n'}
              Subscribe with card, auto-renew {'\n'}
              Download to listen offline, cancel anytime
            </Text>

            <TouchableNativeFeedback>
              <View style={styles.viewPlansButton}>
                <Text style={styles.viewPlansButtonText}>
                  Try 1 month free
                </Text>
              </View>
            </TouchableNativeFeedback>

            <Text style={styles.tocText}>
              Only $119/month after. Offer only for users who are new {'\n'} to Premium. Terms apply.
            </Text>

          </LinearGradient>

        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainPremiumView: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#141414',
  },
  premiumScreenTitleContainer: {
    width: '100%',
    height: screenHeight > 640 ? 185 : 180,
    // backgroundColor: 'red',
    justifyContent:'flex-end',
    paddingBottom: 13,
    marginBottom: screenHeight > 640 ? 25 : 18
  },
  premiumScreenTitleText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 29,
    textAlign: 'center'
  },
  mainCard: {
    height: screenHeight > 640 ? 150 : 140,
    width: screenHeight > 640 ? 330 : 310,
    backgroundColor: '#393939',
    flexDirection: 'row',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cardLeft: {
    height: '100%',
    width: '50%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'column'
  },
  leftCardTop: {
    height: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftCardText: {
    height: '75%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftCardTopText: {
    color: '#ffffff99',
    fontFamily: 'Product-Sans-Regular',
    textTransform: 'uppercase',
    fontSize: 11,
    letterSpacing: 2.5
  },
  leftCardTopTextPr: {
    color: '#ffffff99',
    fontFamily: 'Product-Sans-Regular',
    textTransform: 'uppercase',
    fontSize: 11,
    letterSpacing: 2.5
  },
  leftCardTextMain: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 19,
    marginBottom: 38
  },
  cardRight: {
    width: '50%',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  cardRightGrad: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  swiperWrapper: {
    height: 210,
  },
  playlistInfoSubText: {
    color: '#9e9e9e',
    textAlign: 'center',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 11,
    width: '100%'
  },
  premiumButtonContainer: {
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 12
  },
  createPlaylistView: {
    borderRadius: 300,
    backgroundColor: '#fff',
    padding: screenHeight > 640 ? 14.5 : 14,
    // backgroundColor: 'red',
    // width: 220
    paddingLeft: screenHeight > 640 ? 50 : 45,
    paddingRight: screenHeight > 640 ? 50 : 45
  },
  createPlaylistText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Product Sans Bold 700',
    fontSize: screenHeight > 640 ? 15 : 14,
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  spotifyFreeBlock: {
    backgroundColor: '#393939',
    height: screenHeight > 640 ?  75 : 70,
    width: '91%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 9,
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: screenHeight > 640 ? 30 : 25,
    paddingRight: screenHeight > 640 ? 30 : 25,
    marginBottom: screenHeight > 640 ? 38 : 35,
  },
  spotifyFreeText: {
    fontFamily: 'Product Sans Bold 700',
    fontSize: 17,
    color: '#fff',
  },
  currentPlanText: {
    color: '#ffffff99',
    fontFamily: 'Product-Sans-Regular',
    textTransform: 'uppercase',
    fontSize: 9,
    letterSpacing: 2.5
  },
  bigCardMain: {
    height: screenHeight > 640 ? 280 : 270,
    width: '91%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    marginBottom: screenHeight > 640 ? 38 : 35
  },
  cardHeader: {
    // backgroundColor: 'red',
    height: screenHeight > 640 ? 80: 75,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cardHeaderLeft: {
    height:'100%',
    justifyContent: 'flex-end',
    paddingLeft: 37
  },
  cardHeaderLeftText: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 18
  },
  cardHeaderRight: {
    height:'100%',
    justifyContent: 'flex-end',
    paddingRight: 40,
    alignItems: 'flex-end'
  },
  cardHeaderRightTextTop: {
    color: '#fff',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 22,
    marginBottom: 3
  },
  cardHeaderRightTextBottom: {
    textTransform: 'uppercase',
    fontFamily: 'Product-Sans-Regular',
    color: '#ffffff',
    fontSize: 9,
    letterSpacing: 1.5
  },
  infoText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 14.5,
    marginTop: screenHeight > 640 ?  40 : 45,
    lineHeight: 18
  },
  viewPlansButton: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 300,
    marginLeft: 'auto',
    marginTop: 20,
    marginRight: 'auto',
    paddingLeft: 45,
    paddingRight: 45,
  },
  viewPlansButtonText: {
    textTransform: 'uppercase',
    color: '#000',
    fontFamily: 'Product Sans Bold 700',
    fontSize: 13,
    letterSpacing: 2
  },
  tocText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Product-Sans-Regular',
    fontSize: 10.25,
    marginTop: 11
  }
  
})

export default PremiumScreen;