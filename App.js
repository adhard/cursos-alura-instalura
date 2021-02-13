import React from 'react';
import { Feed } from './src/views/Feed';
import { Login } from './src/views/Login';

import { createNavigatorFactory } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const navigator = createStackNavigator({
  Login: { screen: Login },
  Feed: { screen: Feed }
})

const AppContainer = createNavigatorFactory(navigator)

const App = () => {

  return (
    // <Feed />
    // <Login />
    <AppContainer />
  );
};

export default App;
