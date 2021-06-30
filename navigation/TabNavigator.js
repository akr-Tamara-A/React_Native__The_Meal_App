import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeTab from './HomeTabNavigation';
import FavTab from './FavTabNavigation';

const tabNavigatorConfig =
  Platform.OS === 'android'
    ? {shifting: true}
    : {
        tabBarOptions: {
          activeTintColor: COLORS.accentColor,
          labelStyle: {fontSize: 16},
        },
      };

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator {...tabNavigatorConfig}>
      <Tab.Screen
        name="Meals"
        component={HomeTab}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="restaurant" size={25} color={color} />
          ),
          tabBarColor: COLORS.primaryColor,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavTab}
        options={{
          tabBarIcon: ({color}) => <Icon name="star" size={25} color={color} />,
          tabBarColor: COLORS.accentColor,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
