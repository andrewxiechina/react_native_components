import React from 'react';
import {
  Button,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';

const MyHomeScreen = ({ navigation }) => (
  <ScrollView>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Settings')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

////////////////////////////////////////////////////////////
// CONFIGURATION HERE
////////////////////////////////////////////////////////////

//Routing for the tab
var config = {
  "Home": {
    screen: MyHomeScreen,
    path: '/',
    icon: 'ios-leaf',
  },
  "Transaction": {
    screen: MyHomeScreen,
    path: '/',
    icon: 'logo-buffer',
  },
  "School": {
    screen: MyHomeScreen,
    path: '/',
    icon: 'md-school',
  },
  "Settings": {
    screen: MyHomeScreen,
    path: '/',
    icon: 'md-settings',
  }
};

var styles ={
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: false,
  //initialRouteName:
  //order: []
  //paths: []
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    activeBackgroundColor: '#006600',
    inactiveBackgroundColor: '#339900',
    showIcon: true,
    showLabel: true,
    labelStyle: {
      fontSize: 12,
    },
    style: {

    },
    indicatorStyle: {

    },
    labelStyle:{

    },
    tabStyle: {

    },
    iconStyle: {

    }
  },
};

////////////////////////////////////////////////////////////
// Main Program
////////////////////////////////////////////////////////////
const renderTabNav = () => {
  var obj = {};
  Object.keys(config).map((key,index) => {
    var item = config[key];
    obj[key] =  {
      screen: item.screen,
      path: item.path,
      navigationOptions: {
        title: key,
        tabBarLabel: key,
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={item.icon}
            size={30}
            style={{ color: tintColor }}
          />
        ),
      },
    }
  });
  return obj;
}

const ReversedTabs = TabNavigator((renderTabNav()), styles);


export default ReversedTabs;
