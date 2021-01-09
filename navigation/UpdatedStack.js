import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainHomeScreen from '../screens/MainHomeScreen';

 
const UpdatedStackStack = createStackNavigator();


const UpdatedStack = () => {

  return (
    <UpdatedStackStack.Navigator 
      initialRouteName={"MainHomeScreen" }
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <UpdatedStackStack.Screen
        name="MainHomeScreen"
        component={MainHomeScreen}
        options={{header: () => null}}
      />
    </UpdatedStackStack.Navigator>
  )
}



export default UpdatedStack;
