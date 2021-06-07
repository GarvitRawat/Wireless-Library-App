import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Transaction from './Screens/Transaction';
import Search from './Screens/Search'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return(
      
      <AppContainer/>
      
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})

const AppContainer = createAppContainer(TabNavigator)