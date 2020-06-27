import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './Header';
import Main from './Main';
import PostDetails from './PostDetails';

const Stack = createStackNavigator();

export const App: React.FunctionComponent = () => {

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Author Finder' component={Main} />
        <Stack.Screen name='PostDetails' component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;
