import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login/Login.js';
import Dashboard from './pages/Dashboard/Dashboard.js';

const App = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
}, {
  initialRouteName: 'Login',
}
);
export default createAppContainer(App);