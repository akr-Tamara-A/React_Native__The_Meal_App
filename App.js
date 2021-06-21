import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealScreen from './screens/CategoryMealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import COLORS from './constants/colors';
import StyledHeaderButton from './components/StyledHeaderButton';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen
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
        <Stack.Screen
          name="Meal Detail"
          component={MealDetailScreen}
          options={({route}) => ({
            title: route.params.meal.title,
            headerStyle: {
              backgroundColor:
                Platform.OS === 'android'
                  ? route.params.category.color
                  : 'white',
            },
            headerTitleStyle: {
              color:
                Platform.OS === 'android'
                  ? route.params.category.textColor
                  : COLORS.primaryColor,
            },
            headerTintColor:
              Platform.OS === 'android'
                ? route.params.category.textColor
                : COLORS.primaryColor,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
