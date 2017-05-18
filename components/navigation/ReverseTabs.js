/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
      title="Open profile screen"
    />
    <Button
      onPress={() => navigation.navigate('NotifSettings')}
      title="Open notifications screen"
    />
    <Button
      onPress={() => navigation.navigate('SettingsTab')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

const TabNav = TabNavigator(
  {
    MainTab: {
      screen: MyHomeScreen,
      path: '/',
      navigationOptions: {
        title: 'Welcome',
        tabBarLabel: 'Transaction',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='ios-leaf'
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SecondTab: {
      screen: MyHomeScreen,
      path: '/',
      navigationOptions: {
        title: 'Welcome',
        tabBarLabel: 'Transaction',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='logo-javascript'
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    ThirdTab: {
      screen: MyHomeScreen,
      path: '/',
      navigationOptions: {
        title: 'Welcome',
        tabBarLabel: 'Transaction',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='logo-chrome'
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: MySettingsScreen,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='ios-settings'
            size={30}
            style={{ color: 'white' }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: '#006600',
      inactiveBackgroundColor: '#339900',
      labelStyle: {
        fontSize: 12,
      },
      style: {
      },
    },

  }
);

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav,
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications',
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!`;
    },
  },
});

export default StacksOverTabs;
