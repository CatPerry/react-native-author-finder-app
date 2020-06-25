import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Main from './components/Main';
import PostDetails from './components/PostDetails';

const Stack = createStackNavigator();

export const App: React.FunctionComponent = () => {

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='PostDetails' component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;
