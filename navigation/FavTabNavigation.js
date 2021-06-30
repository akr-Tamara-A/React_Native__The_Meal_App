import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import COLORS from '../constants/colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import StyledHeaderButton from '../components/StyledHeaderButton';

const FavStack = createStackNavigator();

const FavTab = () => {
  return (
    <FavStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? COLORS.accentColor : 'white',
        },
        headerTitleStyle: {
          color: Platform.OS === 'android' ? 'white' : COLORS.accentColor,
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : COLORS.accentColor,
      }}>
      <FavStack.Screen
        name="Favorite Meals"
        component={FavoritesScreen}
        options={({navigation}) => ({
          headerLeft: () => {
            return (
              <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
                <Item
                  title="Menu"
                  iconName="menu"
                  onPress={() => {
                    console.log('menu');
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
      <FavStack.Screen
        name="Meal Detail"
        component={MealDetailScreen}
        options={({route}) => ({
          title: route.params.meal.title,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.accentColor : 'white',
          },
          headerTitleStyle: {
            color: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={StyledHeaderButton}>
                <Item
                  title="Favorite"
                  iconName="star"
                  onPress={() => {
                    console.log('fav');
                  }}
                />
                <Item
                  title="Unfavorite"
                  iconName="star-outline"
                  onPress={() => {
                    console.log('unfav');
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
    </FavStack.Navigator>
  );
};

export default FavTab;
