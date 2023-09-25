import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../../Screens/Search';

import ProfileScreen from '../../Screens/Profile';
import Disscuss from '../../Screens/Disscuss';
import Renteditem from '../../Screens/Rented/RentemItem';
import Post from '../../Screens/Post/Post';




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let tintColor;

          if (route.name === 'Search') {
            iconName = require('../../Assets/Icons/search.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          } else if (route.name === 'Post') {
            iconName = require('../../Assets/Icons/plus.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          } else if (route.name === 'Discuss') {
            iconName = require('../../Assets/Icons/sms.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          } else if (route.name === 'Rented') {
            iconName = require('../../Assets/Icons/chart.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          } else if (route.name === 'Profile') {
            iconName = require('../../Assets/Icons/Profile.png');
            tintColor = focused ? '#038F54' : '#E2E2E2';
          }

          return <Image source={iconName} style={{ width: 25, height: 25,  tintColor}} />;
        },
      })}
      
      tabBarOptions={{
        labelStyle: { paddingBottom: 10 },
        activeTintColor: '#1B938F',
        inactiveTintColor: '#E2E2E2',
       
      }}
    
    >
      <Tab.Screen name="Search" component={Search} options={{ tabBarLabel: 'Search',headerShown: false  ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'} }} />
      <Tab.Screen name="Post" component={Post} options={{ tabBarLabel: 'Post',headerShown: false ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'}  }} />
      <Tab.Screen name="Discuss" component={Disscuss} options={{ tabBarLabel: 'Discuss',headerShown: false ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'}}} />
      <Tab.Screen name="Rented" component={Renteditem} options={{ tabBarLabel: 'Rented',headerShown: false ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'} }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile',headerShown: false ,tabBarStyle:{height:70,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:10,backgroundColor:'white'} }} />
    </Tab.Navigator>
  );
}

export default function Bottom() {
  return (
    
    <MyTabs />
  );
}
