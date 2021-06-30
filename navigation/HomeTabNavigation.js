import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import COLORS from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import StyledHeaderButton from '../components/StyledHeaderButton';

const HomeStack = createStackNavigator();

const HomeTab = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? COLORS.primaryColor : 'white',
        },
        headerTitleStyle: {
          color: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
      }}>
      <HomeStack.Screen
        name="Categories"
        component={CategoriesScreen}
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
      <HomeStack.Screen
        name="Category Meal"
        component={CategoryMealScreen}
        options={({route}) => ({
          title: route.params.item.title,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? route.params.item.color : 'white',
          },
          headerTitleStyle: {
            color:
              Platform.OS === 'android'
                ? route.params.item.textColor
                : COLORS.primaryColor,
          },
          headerTintColor:
            Platform.OS === 'android'
              ? route.params.item.textColor
              : COLORS.primaryColor,
        })}
      />
      <HomeStack.Screen
        name="Meal Detail"
        component={MealDetailScreen}
        options={({route, navigation}) => ({
          title: route.params.meal.title,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? COLORS.primaryColor : 'white',
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
              </HeaderButtons>
            );
          },
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeTab;
