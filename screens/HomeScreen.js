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
  TextInput
} from 'react-native';
import { AuthContext } from '../AuthProvider';

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext)


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Welcome: {user.uid}
      </Text>
      <Button 
        title="Log Out"
        onPress={() => logout()}
      />
    </View>
  )
}

export default HomeScreen;