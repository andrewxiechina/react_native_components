import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  TabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBarTop from './TabBarTop';

////////////////////////////////////////////////////////////
// For demo purpose only
////////////////////////////////////////////////////////////
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
  tabBarPosition: 'top',
  animationEnabled: false,
  swipeEnabled: false,
  //lazy: false,
  //initialRouteName:
  //order: []
  //paths: []
  tabBarOptions: {
    tabBarComponent: TabBarTop,
    activeTintColor: '#ccc',
    inactiveTintColor: 'white',
    activeBackgroundColor: '#339900',
    inactiveBackgroundColor: '#339900',
    showIcon: false,
    showLabel: true,
    style: {
      backgroundColor: '#339900',
      paddingTop: 20,
    },
    indicatorStyle: {
      backgroundColor: 'white'
    },
    labelStyle:{
      fontSize: 15,
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
